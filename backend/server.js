const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Load Staging Matches (Matches 41-74)
const stagingFilePath = path.join(__dirname, 'stagingData.json');
let stagedMatches = JSON.parse(fs.readFileSync(stagingFilePath, 'utf8'));

// Mock Active Matches Storage with Full Scorecards
let activeMatches = [
  { 
    match_no: 1, 
    team1: "RCB", 
    team2: "SRH", 
    winner: "RCB", 
    win_margin: "6 wickets", 
    potm: "Virat Kohli", 
    status: "COMPLETED",
    batting_performances: [
      { player_name: "Virat Kohli", runs: 82, balls: 49, fours: 6, sixes: 4, is_out: 0 },
      { player_name: "Faf du Plessis", runs: 35, balls: 22, fours: 4, sixes: 2, is_out: 1 }
    ],
    bowling_performances: [
      { player_name: "Bhuvneshwar Kumar", overs: 4.0, maidens: 0, runs_conceded: 28, wickets: 2 }
    ]
  },
  { 
    match_no: 2, 
    team1: "MI", 
    team2: "KKR", 
    winner: "MI", 
    win_margin: "7 wickets", 
    potm: "Rohit Sharma", 
    status: "COMPLETED",
    batting_performances: [
      { player_name: "Rohit Sharma", runs: 65, balls: 38, fours: 5, sixes: 3, is_out: 1 }
    ],
    bowling_performances: [
      { player_name: "Sunil Narine", overs: 4.0, maidens: 0, runs_conceded: 24, wickets: 1 }
    ]
  },
  { 
    match_no: 40, 
    team1: "GT", 
    team2: "PBKS", 
    winner: "GT", 
    win_margin: "4 wickets", 
    potm: "Jason Holder", 
    status: "COMPLETED",
    batting_performances: [
      { player_name: "Jason Holder", runs: 45, balls: 25, fours: 4, sixes: 3, is_out: 0 }
    ],
    bowling_performances: [
      { player_name: "Arshdeep Singh", overs: 4.0, maidens: 0, runs_conceded: 30, wickets: 2 }
    ]
  }
];

// --- PUBLIC ENDPOINTS ---

// Get active matches for Cricbuzz-style UI
app.get('/api/matches', (req, res) => {
  res.json({ success: true, count: activeMatches.length, data: activeMatches });
});

// Dynamic Points Table Calculation
app.get('/api/points-table', (req, res) => {
  const teams = ["CSK", "MI", "RCB", "KKR", "DC", "RR", "PBKS", "SRH", "LSG", "GT"];
  const standings = teams.map(team => {
    const played = activeMatches.filter(m => m.team1 === team || m.team2 === team).length;
    const won = activeMatches.filter(m => m.winner === team).length;
    const lost = played - won;
    return { team, played, won, lost, points: won * 2 };
  }).sort((a, b) => b.points - a.points);

  res.json({ success: true, data: standings });
});

// --- ADMIN ENDPOINTS ---

// Get next available staged match for auto-addition
app.get('/api/admin/next-staged-match', (req, res) => {
  if (stagedMatches.length === 0) {
    return res.status(404).json({ success: false, message: "No more staged matches remaining!" });
  }
  res.json({ success: true, nextMatch: stagedMatches[0] });
});

// Auto-Add next match into active database
app.post('/api/admin/auto-add-match', (req, res) => {
  if (stagedMatches.length === 0) {
    return res.status(400).json({ success: false, message: "All staged matches have already been added!" });
  }

  const matchToAdd = stagedMatches.shift(); // Remove from queue
  activeMatches.push({
    match_no: matchToAdd.match_no,
    team1: matchToAdd.team1,
    team2: matchToAdd.team2,
    winner: matchToAdd.winner,
    win_margin: matchToAdd.win_margin_wickets ? `${matchToAdd.win_margin_wickets} wickets` : `${matchToAdd.win_margin_runs} runs`,
    potm: matchToAdd.potm,
    status: "COMPLETED"
  });

  // Save updated staging queue back to file
  fs.writeFileSync(stagingFilePath, JSON.stringify(stagedMatches, null, 2));

  res.json({ success: true, message: `Match #${matchToAdd.match_no} added successfully!`, addedMatch: matchToAdd });
});

// Manual Match Entry
app.post('/api/admin/manual-add-match', (req, res) => {
  const newMatch = req.body;
  newMatch.match_no = activeMatches.length + 1;
  newMatch.status = "COMPLETED";
  activeMatches.push(newMatch);

  res.json({ success: true, message: "Manual match scorecard committed to DB!", match: newMatch });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`CrickStats Backend running on http://localhost:${PORT}`));