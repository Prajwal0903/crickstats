// stagingMatches.js — IPL 2024 Matches 41-74 (Staging / Auto-Sim Storage)
// These are reserved and NOT inserted into active DB during initial migration.
// Used by Admin "Auto-Fetch Next Match" feature.

export const STAGING_MATCHES = [
  {
    match_no: 41, team1_id: 1, team2_id: 3, venue_id: 1,
    date: "2024-04-29", toss_winner_id: 3, toss_decision: "FIELD",
    winner_id: 1, win_margin: "5 wickets", mom_player_id: 3,
    status: "STAGING",
    team1_score: "185/5", team2_score: "186/5",
    batting: [
      { player_id: 3, franchise_id: 1, team_id: 1, innings: 2, runs: 95, balls: 58, fours: 8, sixes: 5, dismissal: "NOT OUT" },
      { player_id: 32, franchise_id: 3, team_id: 3, innings: 1, runs: 71, balls: 50, fours: 6, sixes: 2, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 8, franchise_id: 1, team_id: 1, innings: 1, overs: 4, maidens: 1, runs_conceded: 22, wickets: 3 },
      { player_id: 38, franchise_id: 3, team_id: 3, innings: 2, overs: 4, maidens: 0, runs_conceded: 35, wickets: 2 },
    ]
  },
  {
    match_no: 42, team1_id: 6, team2_id: 7, venue_id: 6,
    date: "2024-04-30", toss_winner_id: 7, toss_decision: "FIELD",
    winner_id: 7, win_margin: "22 runs", mom_player_id: 94,
    status: "STAGING",
    team1_score: "162/9", team2_score: "184/6",
    batting: [
      { player_id: 94, franchise_id: 7, team_id: 7, innings: 1, runs: 88, balls: 52, fours: 7, sixes: 5, dismissal: "OUT" },
      { player_id: 80, franchise_id: 6, team_id: 6, innings: 2, runs: 55, balls: 42, fours: 4, sixes: 2, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 100, franchise_id: 7, team_id: 7, innings: 2, overs: 4, maidens: 0, runs_conceded: 26, wickets: 3 },
      { player_id: 85, franchise_id: 6, team_id: 6, innings: 1, overs: 4, maidens: 0, runs_conceded: 36, wickets: 2 },
    ]
  },
  {
    match_no: 43, team1_id: 9, team2_id: 10, venue_id: 9,
    date: "2024-05-01", toss_winner_id: 9, toss_decision: "BAT",
    winner_id: 9, win_margin: "13 runs", mom_player_id: 121,
    status: "STAGING",
    team1_score: "199/5", team2_score: "186/8",
    batting: [
      { player_id: 121, franchise_id: 9, team_id: 9, innings: 1, runs: 84, balls: 58, fours: 7, sixes: 3, dismissal: "OUT" },
      { player_id: 136, franchise_id: 10, team_id: 10, innings: 2, runs: 68, balls: 46, fours: 5, sixes: 3, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 129, franchise_id: 9, team_id: 9, innings: 2, overs: 4, maidens: 0, runs_conceded: 28, wickets: 3 },
      { player_id: 143, franchise_id: 10, team_id: 10, innings: 1, overs: 4, maidens: 0, runs_conceded: 36, wickets: 2 },
    ]
  },
  {
    match_no: 44, team1_id: 8, team2_id: 5, venue_id: 8,
    date: "2024-05-02", toss_winner_id: 5, toss_decision: "FIELD",
    winner_id: 8, win_margin: "28 runs", mom_player_id: 107,
    status: "STAGING",
    team1_score: "224/5", team2_score: "196/8",
    batting: [
      { player_id: 107, franchise_id: 8, team_id: 8, innings: 1, runs: 89, balls: 55, fours: 8, sixes: 5, dismissal: "NOT OUT" },
      { player_id: 61, franchise_id: 5, team_id: 5, innings: 2, runs: 72, balls: 50, fours: 6, sixes: 2, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 113, franchise_id: 8, team_id: 8, innings: 2, overs: 4, maidens: 0, runs_conceded: 32, wickets: 3 },
      { player_id: 69, franchise_id: 5, team_id: 5, innings: 1, overs: 4, maidens: 0, runs_conceded: 40, wickets: 2 },
    ]
  },
  {
    match_no: 45, team1_id: 4, team2_id: 2, venue_id: 4,
    date: "2024-05-03", toss_winner_id: 2, toss_decision: "FIELD",
    winner_id: 4, win_margin: "5 wickets", mom_player_id: 48,
    status: "STAGING",
    team1_score: "177/7", team2_score: "179/5",
    batting: [
      { player_id: 48, franchise_id: 4, team_id: 4, innings: 2, runs: 80, balls: 52, fours: 7, sixes: 4, dismissal: "NOT OUT" },
      { player_id: 16, franchise_id: 2, team_id: 2, innings: 1, runs: 68, balls: 48, fours: 6, sixes: 2, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 55, franchise_id: 4, team_id: 4, innings: 1, overs: 4, maidens: 0, runs_conceded: 26, wickets: 3 },
      { player_id: 26, franchise_id: 2, team_id: 2, innings: 2, overs: 3, maidens: 0, runs_conceded: 30, wickets: 2 },
    ]
  },
  {
    match_no: 46, team1_id: 3, team2_id: 6, venue_id: 3,
    date: "2024-05-04", toss_winner_id: 6, toss_decision: "BAT",
    winner_id: 3, win_margin: "33 runs", mom_player_id: 32,
    status: "STAGING",
    team1_score: "169/9", team2_score: "202/4",
    batting: [
      { player_id: 32, franchise_id: 3, team_id: 3, innings: 2, runs: 88, balls: 58, fours: 8, sixes: 4, dismissal: "NOT OUT" },
      { player_id: 80, franchise_id: 6, team_id: 6, innings: 1, runs: 58, balls: 42, fours: 5, sixes: 2, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 38, franchise_id: 3, team_id: 3, innings: 1, overs: 4, maidens: 0, runs_conceded: 27, wickets: 3 },
      { player_id: 85, franchise_id: 6, team_id: 6, innings: 2, overs: 4, maidens: 0, runs_conceded: 38, wickets: 2 },
    ]
  },
  {
    match_no: 47, team1_id: 1, team2_id: 9, venue_id: 1,
    date: "2024-05-05", toss_winner_id: 1, toss_decision: "BAT",
    winner_id: 1, win_margin: "4 wickets", mom_player_id: 1,
    status: "STAGING",
    team1_score: "168/5", team2_score: "171/6",
    batting: [
      { player_id: 1, franchise_id: 1, team_id: 1, innings: 2, runs: 68, balls: 46, fours: 6, sixes: 3, dismissal: "NOT OUT" },
      { player_id: 126, franchise_id: 9, team_id: 9, innings: 1, runs: 60, balls: 44, fours: 5, sixes: 2, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 8, franchise_id: 1, team_id: 1, innings: 1, overs: 4, maidens: 1, runs_conceded: 20, wickets: 4 },
      { player_id: 129, franchise_id: 9, team_id: 9, innings: 2, overs: 4, maidens: 0, runs_conceded: 31, wickets: 2 },
    ]
  },
  {
    match_no: 48, team1_id: 10, team2_id: 7, venue_id: 10,
    date: "2024-05-06", toss_winner_id: 7, toss_decision: "FIELD",
    winner_id: 10, win_margin: "4 wickets", mom_player_id: 143,
    status: "STAGING",
    team1_score: "177/6", team2_score: "178/6",
    batting: [
      { player_id: 136, franchise_id: 10, team_id: 10, innings: 2, runs: 76, balls: 50, fours: 7, sixes: 2, dismissal: "NOT OUT" },
      { player_id: 91, franchise_id: 7, team_id: 7, innings: 1, runs: 65, balls: 44, fours: 5, sixes: 2, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 143, franchise_id: 10, team_id: 10, innings: 1, overs: 4, maidens: 1, runs_conceded: 24, wickets: 3 },
      { player_id: 100, franchise_id: 7, team_id: 7, innings: 2, overs: 4, maidens: 0, runs_conceded: 33, wickets: 2 },
    ]
  },
  {
    match_no: 49, team1_id: 5, team2_id: 2, venue_id: 5,
    date: "2024-05-07", toss_winner_id: 2, toss_decision: "FIELD",
    winner_id: 2, win_margin: "41 runs", mom_player_id: 22,
    status: "STAGING",
    team1_score: "133/9", team2_score: "174/4",
    batting: [
      { player_id: 22, franchise_id: 2, team_id: 2, innings: 1, runs: 88, balls: 55, fours: 8, sixes: 4, dismissal: "NOT OUT" },
      { player_id: 65, franchise_id: 5, team_id: 5, innings: 2, runs: 44, balls: 33, fours: 3, sixes: 1, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 26, franchise_id: 2, team_id: 2, innings: 2, overs: 4, maidens: 0, runs_conceded: 22, wickets: 4 },
      { player_id: 69, franchise_id: 5, team_id: 5, innings: 1, overs: 4, maidens: 0, runs_conceded: 35, wickets: 2 },
    ]
  },
  {
    match_no: 50, team1_id: 8, team2_id: 4, venue_id: 8,
    date: "2024-05-08", toss_winner_id: 4, toss_decision: "BAT",
    winner_id: 8, win_margin: "5 wickets", mom_player_id: 109,
    status: "STAGING",
    team1_score: "194/6", team2_score: "195/5",
    batting: [
      { player_id: 50, franchise_id: 4, team_id: 4, innings: 1, runs: 82, balls: 52, fours: 7, sixes: 4, dismissal: "OUT" },
      { player_id: 109, franchise_id: 8, team_id: 8, innings: 2, runs: 78, balls: 48, fours: 6, sixes: 3, dismissal: "NOT OUT" },
    ],
    bowling: [
      { player_id: 113, franchise_id: 8, team_id: 8, innings: 1, overs: 4, maidens: 0, runs_conceded: 33, wickets: 3 },
      { player_id: 55, franchise_id: 4, team_id: 4, innings: 2, overs: 4, maidens: 0, runs_conceded: 38, wickets: 2 },
    ]
  },
  {
    match_no: 51, team1_id: 6, team2_id: 3, venue_id: 3,
    date: "2024-05-09", toss_winner_id: 3, toss_decision: "FIELD",
    winner_id: 3, win_margin: "18 runs", mom_player_id: 32,
    status: "STAGING",
    team1_score: "168/8", team2_score: "186/5",
    batting: [
      { player_id: 32, franchise_id: 3, team_id: 3, innings: 2, runs: 92, balls: 60, fours: 8, sixes: 4, dismissal: "NOT OUT" },
      { player_id: 79, franchise_id: 6, team_id: 6, innings: 1, runs: 58, balls: 42, fours: 5, sixes: 2, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 38, franchise_id: 3, team_id: 3, innings: 1, overs: 4, maidens: 0, runs_conceded: 28, wickets: 3 },
      { player_id: 84, franchise_id: 6, team_id: 6, innings: 2, overs: 4, maidens: 0, runs_conceded: 36, wickets: 2 },
    ]
  },
  {
    match_no: 52, team1_id: 7, team2_id: 9, venue_id: 7,
    date: "2024-05-10", toss_winner_id: 9, toss_decision: "FIELD",
    winner_id: 7, win_margin: "7 wickets", mom_player_id: 91,
    status: "STAGING",
    team1_score: "160/8", team2_score: "162/3",
    batting: [
      { player_id: 91, franchise_id: 7, team_id: 7, innings: 2, runs: 74, balls: 48, fours: 6, sixes: 3, dismissal: "NOT OUT" },
      { player_id: 121, franchise_id: 9, team_id: 9, innings: 1, runs: 60, balls: 44, fours: 5, sixes: 1, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 100, franchise_id: 7, team_id: 7, innings: 1, overs: 4, maidens: 0, runs_conceded: 26, wickets: 3 },
      { player_id: 129, franchise_id: 9, team_id: 9, innings: 2, overs: 3, maidens: 0, runs_conceded: 28, wickets: 1 },
    ]
  },
  {
    match_no: 53, team1_id: 1, team2_id: 10, venue_id: 10,
    date: "2024-05-11", toss_winner_id: 1, toss_decision: "BAT",
    winner_id: 1, win_margin: "6 runs", mom_player_id: 8,
    status: "STAGING",
    team1_score: "201/6", team2_score: "195/7",
    batting: [
      { player_id: 3, franchise_id: 1, team_id: 1, innings: 1, runs: 80, balls: 54, fours: 7, sixes: 3, dismissal: "OUT" },
      { player_id: 136, franchise_id: 10, team_id: 10, innings: 2, runs: 76, balls: 52, fours: 6, sixes: 3, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 8, franchise_id: 1, team_id: 1, innings: 2, overs: 4, maidens: 0, runs_conceded: 30, wickets: 3 },
      { player_id: 143, franchise_id: 10, team_id: 10, innings: 1, overs: 4, maidens: 0, runs_conceded: 38, wickets: 2 },
    ]
  },
  {
    match_no: 54, team1_id: 2, team2_id: 5, venue_id: 2,
    date: "2024-05-12", toss_winner_id: 5, toss_decision: "FIELD",
    winner_id: 2, win_margin: "56 runs", mom_player_id: 16,
    status: "STAGING",
    team1_score: "122/9", team2_score: "178/4",
    batting: [
      { player_id: 16, franchise_id: 2, team_id: 2, innings: 2, runs: 72, balls: 50, fours: 7, sixes: 3, dismissal: "OUT" },
      { player_id: 65, franchise_id: 5, team_id: 5, innings: 1, runs: 38, balls: 28, fours: 3, sixes: 1, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 26, franchise_id: 2, team_id: 2, innings: 1, overs: 4, maidens: 1, runs_conceded: 18, wickets: 4 },
      { player_id: 64, franchise_id: 5, team_id: 5, innings: 2, overs: 4, maidens: 0, runs_conceded: 32, wickets: 2 },
    ]
  },
  {
    match_no: 55, team1_id: 4, team2_id: 8, venue_id: 4,
    date: "2024-05-13", toss_winner_id: 8, toss_decision: "FIELD",
    winner_id: 4, win_margin: "11 wickets", mom_player_id: 48,
    status: "STAGING",
    team1_score: "124/10", team2_score: "128/0",
    batting: [
      { player_id: 47, franchise_id: 4, team_id: 4, innings: 2, runs: 72, balls: 44, fours: 6, sixes: 4, dismissal: "NOT OUT" },
      { player_id: 48, franchise_id: 4, team_id: 4, innings: 2, runs: 55, balls: 32, fours: 4, sixes: 4, dismissal: "NOT OUT" },
    ],
    bowling: [
      { player_id: 55, franchise_id: 4, team_id: 4, innings: 1, overs: 4, maidens: 1, runs_conceded: 16, wickets: 5 },
      { player_id: 54, franchise_id: 4, team_id: 4, innings: 1, overs: 4, maidens: 0, runs_conceded: 22, wickets: 2 },
    ]
  },
  {
    match_no: 56, team1_id: 7, team2_id: 3, venue_id: 7,
    date: "2024-05-14", toss_winner_id: 3, toss_decision: "FIELD",
    winner_id: 7, win_margin: "9 runs", mom_player_id: 94,
    status: "STAGING",
    team1_score: "182/8", team2_score: "173/7",
    batting: [
      { player_id: 94, franchise_id: 7, team_id: 7, innings: 1, runs: 78, balls: 52, fours: 7, sixes: 3, dismissal: "OUT" },
      { player_id: 32, franchise_id: 3, team_id: 3, innings: 2, runs: 68, balls: 48, fours: 5, sixes: 2, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 100, franchise_id: 7, team_id: 7, innings: 2, overs: 4, maidens: 0, runs_conceded: 28, wickets: 3 },
      { player_id: 38, franchise_id: 3, team_id: 3, innings: 1, overs: 4, maidens: 0, runs_conceded: 34, wickets: 2 },
    ]
  },
  {
    match_no: 57, team1_id: 10, team2_id: 9, venue_id: 10,
    date: "2024-05-15", toss_winner_id: 9, toss_decision: "FIELD",
    winner_id: 10, win_margin: "5 wickets", mom_player_id: 136,
    status: "STAGING",
    team1_score: "188/5", team2_score: "190/5",
    batting: [
      { player_id: 136, franchise_id: 10, team_id: 10, innings: 2, runs: 84, balls: 56, fours: 7, sixes: 4, dismissal: "NOT OUT" },
      { player_id: 121, franchise_id: 9, team_id: 9, innings: 1, runs: 72, balls: 52, fours: 6, sixes: 2, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 143, franchise_id: 10, team_id: 10, innings: 1, overs: 4, maidens: 1, runs_conceded: 26, wickets: 3 },
      { player_id: 129, franchise_id: 9, team_id: 9, innings: 2, overs: 4, maidens: 0, runs_conceded: 35, wickets: 2 },
    ]
  },
  {
    match_no: 58, team1_id: 1, team2_id: 6, venue_id: 6,
    date: "2024-05-16", toss_winner_id: 6, toss_decision: "FIELD",
    winner_id: 1, win_margin: "36 runs", mom_player_id: 4,
    status: "STAGING",
    team1_score: "217/5", team2_score: "181/8",
    batting: [
      { player_id: 4, franchise_id: 1, team_id: 1, innings: 1, runs: 78, balls: 48, fours: 6, sixes: 5, dismissal: "OUT" },
      { player_id: 80, franchise_id: 6, team_id: 6, innings: 2, runs: 62, balls: 44, fours: 5, sixes: 2, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 8, franchise_id: 1, team_id: 1, innings: 2, overs: 4, maidens: 0, runs_conceded: 26, wickets: 4 },
      { player_id: 84, franchise_id: 6, team_id: 6, innings: 1, overs: 4, maidens: 0, runs_conceded: 40, wickets: 2 },
    ]
  },
  {
    match_no: 59, team1_id: 5, team2_id: 4, venue_id: 5,
    date: "2024-05-17", toss_winner_id: 4, toss_decision: "FIELD",
    winner_id: 5, win_margin: "3 wickets", mom_player_id: 65,
    status: "STAGING",
    team1_score: "191/5", team2_score: "193/7",
    batting: [
      { player_id: 65, franchise_id: 5, team_id: 5, innings: 2, runs: 76, balls: 50, fours: 6, sixes: 3, dismissal: "NOT OUT" },
      { player_id: 50, franchise_id: 4, team_id: 4, innings: 1, runs: 72, balls: 46, fours: 6, sixes: 3, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 69, franchise_id: 5, team_id: 5, innings: 1, overs: 4, maidens: 0, runs_conceded: 30, wickets: 3 },
      { player_id: 55, franchise_id: 4, team_id: 4, innings: 2, overs: 4, maidens: 0, runs_conceded: 36, wickets: 3 },
    ]
  },
  {
    match_no: 60, team1_id: 2, team2_id: 9, venue_id: 9,
    date: "2024-05-18", toss_winner_id: 2, toss_decision: "BAT",
    winner_id: 2, win_margin: "8 wickets", mom_player_id: 17,
    status: "STAGING",
    team1_score: "148/9", team2_score: "151/2",
    batting: [
      { player_id: 17, franchise_id: 2, team_id: 2, innings: 2, runs: 82, balls: 54, fours: 8, sixes: 3, dismissal: "NOT OUT" },
      { player_id: 121, franchise_id: 9, team_id: 9, innings: 1, runs: 52, balls: 38, fours: 4, sixes: 1, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 26, franchise_id: 2, team_id: 2, innings: 1, overs: 4, maidens: 1, runs_conceded: 22, wickets: 3 },
      { player_id: 129, franchise_id: 9, team_id: 9, innings: 2, overs: 2, maidens: 0, runs_conceded: 22, wickets: 1 },
    ]
  },
  {
    match_no: 61, team1_id: 3, team2_id: 10, venue_id: 10,
    date: "2024-05-19", toss_winner_id: 10, toss_decision: "FIELD",
    winner_id: 3, win_margin: "14 runs", mom_player_id: 32,
    status: "STAGING",
    team1_score: "215/6", team2_score: "201/8",
    batting: [
      { player_id: 32, franchise_id: 3, team_id: 3, innings: 1, runs: 100, balls: 65, fours: 9, sixes: 5, dismissal: "OUT" },
      { player_id: 136, franchise_id: 10, team_id: 10, innings: 2, runs: 74, balls: 52, fours: 6, sixes: 3, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 38, franchise_id: 3, team_id: 3, innings: 2, overs: 4, maidens: 0, runs_conceded: 32, wickets: 3 },
      { player_id: 143, franchise_id: 10, team_id: 10, innings: 1, overs: 4, maidens: 0, runs_conceded: 40, wickets: 2 },
    ]
  },
  {
    match_no: 62, team1_id: 7, team2_id: 8, venue_id: 8,
    date: "2024-05-20", toss_winner_id: 7, toss_decision: "FIELD",
    winner_id: 8, win_margin: "7 wickets", mom_player_id: 107,
    status: "STAGING",
    team1_score: "169/8", team2_score: "172/3",
    batting: [
      { player_id: 107, franchise_id: 8, team_id: 8, innings: 2, runs: 86, balls: 54, fours: 8, sixes: 4, dismissal: "NOT OUT" },
      { player_id: 91, franchise_id: 7, team_id: 7, innings: 1, runs: 64, balls: 44, fours: 5, sixes: 2, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 113, franchise_id: 8, team_id: 8, innings: 1, overs: 4, maidens: 0, runs_conceded: 29, wickets: 3 },
      { player_id: 100, franchise_id: 7, team_id: 7, innings: 2, overs: 3, maidens: 0, runs_conceded: 30, wickets: 1 },
    ]
  },
  {
    match_no: 63, team1_id: 6, team2_id: 1, venue_id: 1,
    date: "2024-05-21", toss_winner_id: 1, toss_decision: "FIELD",
    winner_id: 1, win_margin: "55 runs", mom_player_id: 8,
    status: "STAGING",
    team1_score: "126/9", team2_score: "181/5",
    batting: [
      { player_id: 3, franchise_id: 1, team_id: 1, innings: 2, runs: 72, balls: 48, fours: 6, sixes: 3, dismissal: "NOT OUT" },
      { player_id: 79, franchise_id: 6, team_id: 6, innings: 1, runs: 44, balls: 34, fours: 3, sixes: 1, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 8, franchise_id: 1, team_id: 1, innings: 1, overs: 4, maidens: 2, runs_conceded: 14, wickets: 5 },
      { player_id: 85, franchise_id: 6, team_id: 6, innings: 2, overs: 4, maidens: 0, runs_conceded: 36, wickets: 1 },
    ]
  },
  {
    match_no: 64, team1_id: 4, team2_id: 7, venue_id: 4,
    date: "2024-05-22", toss_winner_id: 4, toss_decision: "BAT",
    winner_id: 4, win_margin: "4 wickets", mom_player_id: 54,
    status: "STAGING",
    team1_score: "194/7", team2_score: "197/6",
    batting: [
      { player_id: 50, franchise_id: 4, team_id: 4, innings: 2, runs: 80, balls: 52, fours: 7, sixes: 4, dismissal: "OUT" },
      { player_id: 94, franchise_id: 7, team_id: 7, innings: 1, runs: 72, balls: 48, fours: 6, sixes: 3, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 54, franchise_id: 4, team_id: 4, innings: 1, overs: 4, maidens: 0, runs_conceded: 30, wickets: 3 },
      { player_id: 100, franchise_id: 7, team_id: 7, innings: 2, overs: 4, maidens: 0, runs_conceded: 38, wickets: 2 },
    ]
  },
  {
    match_no: 65, team1_id: 2, team2_id: 6, venue_id: 2,
    date: "2024-05-23", toss_winner_id: 6, toss_decision: "FIELD",
    winner_id: 2, win_margin: "29 runs", mom_player_id: 22,
    status: "STAGING",
    team1_score: "180/7", team2_score: "151/9",
    batting: [
      { player_id: 22, franchise_id: 2, team_id: 2, innings: 1, runs: 82, balls: 52, fours: 7, sixes: 4, dismissal: "OUT" },
      { player_id: 80, franchise_id: 6, team_id: 6, innings: 2, runs: 54, balls: 40, fours: 4, sixes: 1, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 26, franchise_id: 2, team_id: 2, innings: 2, overs: 4, maidens: 0, runs_conceded: 24, wickets: 4 },
      { player_id: 84, franchise_id: 6, team_id: 6, innings: 1, overs: 4, maidens: 0, runs_conceded: 36, wickets: 2 },
    ]
  },
  {
    match_no: 66, team1_id: 9, team2_id: 3, venue_id: 3,
    date: "2024-05-24", toss_winner_id: 3, toss_decision: "FIELD",
    winner_id: 3, win_margin: "6 wickets", mom_player_id: 32,
    status: "STAGING",
    team1_score: "168/8", team2_score: "172/4",
    batting: [
      { player_id: 32, franchise_id: 3, team_id: 3, innings: 2, runs: 78, balls: 52, fours: 6, sixes: 3, dismissal: "NOT OUT" },
      { player_id: 121, franchise_id: 9, team_id: 9, innings: 1, runs: 68, balls: 50, fours: 5, sixes: 2, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 38, franchise_id: 3, team_id: 3, innings: 1, overs: 4, maidens: 0, runs_conceded: 28, wickets: 3 },
      { player_id: 129, franchise_id: 9, team_id: 9, innings: 2, overs: 3, maidens: 0, runs_conceded: 29, wickets: 1 },
    ]
  },
  {
    match_no: 67, team1_id: 10, team2_id: 8, venue_id: 8,
    date: "2024-05-25", toss_winner_id: 8, toss_decision: "FIELD",
    winner_id: 8, win_margin: "3 wickets", mom_player_id: 109,
    status: "STAGING",
    team1_score: "182/6", team2_score: "183/7",
    batting: [
      { player_id: 109, franchise_id: 8, team_id: 8, innings: 2, runs: 72, balls: 48, fours: 6, sixes: 3, dismissal: "NOT OUT" },
      { player_id: 136, franchise_id: 10, team_id: 10, innings: 1, runs: 68, balls: 46, fours: 5, sixes: 3, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 113, franchise_id: 8, team_id: 8, innings: 1, overs: 4, maidens: 0, runs_conceded: 30, wickets: 3 },
      { player_id: 143, franchise_id: 10, team_id: 10, innings: 2, overs: 4, maidens: 0, runs_conceded: 36, wickets: 2 },
    ]
  },
  // ─── PLAYOFF / KNOCKOUT MATCHES ───
  {
    match_no: 68, team1_id: 4, team2_id: 2, venue_id: 4,
    date: "2024-05-21", toss_winner_id: 4, toss_decision: "BAT",
    winner_id: 4, win_margin: "8 wickets", mom_player_id: 48,
    status: "STAGING", match_type: "QUALIFIER 1",
    team1_score: "201/7", team2_score: "204/2",
    batting: [
      { player_id: 48, franchise_id: 4, team_id: 4, innings: 2, runs: 100, balls: 58, fours: 9, sixes: 6, dismissal: "NOT OUT" },
      { player_id: 16, franchise_id: 2, team_id: 2, innings: 1, runs: 76, balls: 52, fours: 7, sixes: 2, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 55, franchise_id: 4, team_id: 4, innings: 1, overs: 4, maidens: 0, runs_conceded: 30, wickets: 3 },
      { player_id: 26, franchise_id: 2, team_id: 2, innings: 2, overs: 2, maidens: 0, runs_conceded: 22, wickets: 0 },
    ]
  },
  {
    match_no: 69, team1_id: 7, team2_id: 3, venue_id: 7,
    date: "2024-05-22", toss_winner_id: 3, toss_decision: "FIELD",
    winner_id: 3, win_margin: "4 wickets", mom_player_id: 32,
    status: "STAGING", match_type: "ELIMINATOR",
    team1_score: "180/7", team2_score: "183/6",
    batting: [
      { player_id: 32, franchise_id: 3, team_id: 3, innings: 2, runs: 80, balls: 54, fours: 7, sixes: 3, dismissal: "NOT OUT" },
      { player_id: 94, franchise_id: 7, team_id: 7, innings: 1, runs: 62, balls: 44, fours: 5, sixes: 2, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 38, franchise_id: 3, team_id: 3, innings: 1, overs: 4, maidens: 0, runs_conceded: 30, wickets: 3 },
      { player_id: 100, franchise_id: 7, team_id: 7, innings: 2, overs: 4, maidens: 0, runs_conceded: 36, wickets: 2 },
    ]
  },
  {
    match_no: 70, team1_id: 2, team2_id: 3, venue_id: 2,
    date: "2024-05-24", toss_winner_id: 2, toss_decision: "BAT",
    winner_id: 2, win_margin: "6 wickets", mom_player_id: 22,
    status: "STAGING", match_type: "QUALIFIER 2",
    team1_score: "195/5", team2_score: "196/4",
    batting: [
      { player_id: 22, franchise_id: 2, team_id: 2, innings: 2, runs: 94, balls: 60, fours: 8, sixes: 4, dismissal: "NOT OUT" },
      { player_id: 32, franchise_id: 3, team_id: 3, innings: 1, runs: 76, balls: 52, fours: 6, sixes: 3, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 26, franchise_id: 2, team_id: 2, innings: 1, overs: 4, maidens: 0, runs_conceded: 30, wickets: 3 },
      { player_id: 38, franchise_id: 3, team_id: 3, innings: 2, overs: 3, maidens: 0, runs_conceded: 28, wickets: 1 },
    ]
  },
  {
    match_no: 71, team1_id: 4, team2_id: 2, venue_id: 10,
    date: "2024-05-26", toss_winner_id: 2, toss_decision: "FIELD",
    winner_id: 4, win_margin: "8 wickets", mom_player_id: 48,
    status: "STAGING", match_type: "FINAL",
    team1_score: "169/7", team2_score: "170/2",
    batting: [
      { player_id: 48, franchise_id: 4, team_id: 4, innings: 2, runs: 78, balls: 50, fours: 7, sixes: 4, dismissal: "NOT OUT" },
      { player_id: 16, franchise_id: 2, team_id: 2, innings: 1, runs: 62, balls: 44, fours: 5, sixes: 2, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 55, franchise_id: 4, team_id: 4, innings: 1, overs: 4, maidens: 1, runs_conceded: 22, wickets: 3 },
      { player_id: 26, franchise_id: 2, team_id: 2, innings: 2, overs: 2, maidens: 0, runs_conceded: 20, wickets: 0 },
    ]
  },
];
