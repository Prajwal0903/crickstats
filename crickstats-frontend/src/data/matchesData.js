// matchesData.js — IPL 2024 Season
// COMPLETED MATCHES (1-40) + BATTING/BOWLING PERFORMANCES

export const COMPLETED_MATCHES = [
  {
    match_no: 1, team1_id: 4, team2_id: 10, venue_id: 4,
    date: "2024-03-22", toss_winner_id: 10, toss_decision: "BOWL",
    winner_id: 4, win_margin: "5 wickets", mom_player_id: 48,
    status: "COMPLETED",
    team1_score: "168/9", team2_score: "169/5",
    batting: [
      { player_id: 48, franchise_id: 4, team_id: 4, innings: 1, runs: 83, balls: 56, fours: 8, sixes: 5, dismissal: "OUT" },
      { player_id: 47, franchise_id: 4, team_id: 4, innings: 1, runs: 28, balls: 18, fours: 2, sixes: 2, dismissal: "OUT" },
      { player_id: 46, franchise_id: 4, team_id: 4, innings: 1, runs: 22, balls: 19, fours: 2, sixes: 1, dismissal: "OUT" },
      { player_id: 136, franchise_id: 10, team_id: 10, innings: 2, runs: 45, balls: 30, fours: 4, sixes: 2, dismissal: "OUT" },
      { player_id: 138, franchise_id: 10, team_id: 10, innings: 2, runs: 36, balls: 28, fours: 3, sixes: 1, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 143, franchise_id: 10, team_id: 10, innings: 1, overs: 4, maidens: 0, runs_conceded: 26, wickets: 3 },
      { player_id: 55, franchise_id: 4, team_id: 4, innings: 2, overs: 4, maidens: 0, runs_conceded: 30, wickets: 2 },
    ]
  },
  {
    match_no: 2, team1_id: 6, team2_id: 8, venue_id: 6,
    date: "2024-03-23", toss_winner_id: 8, toss_decision: "FIELD",
    winner_id: 8, win_margin: "6 wickets", mom_player_id: 107,
    status: "COMPLETED",
    team1_score: "151/8", team2_score: "154/4",
    batting: [
      { player_id: 107, franchise_id: 8, team_id: 8, innings: 2, runs: 62, balls: 40, fours: 6, sixes: 3, dismissal: "NOT OUT" },
      { player_id: 79, franchise_id: 6, team_id: 6, innings: 1, runs: 45, balls: 30, fours: 4, sixes: 2, dismissal: "OUT" },
      { player_id: 109, franchise_id: 8, team_id: 8, innings: 2, runs: 42, balls: 31, fours: 3, sixes: 2, dismissal: "NOT OUT" },
    ],
    bowling: [
      { player_id: 84, franchise_id: 6, team_id: 6, innings: 2, overs: 4, maidens: 0, runs_conceded: 28, wickets: 2 },
      { player_id: 113, franchise_id: 8, team_id: 8, innings: 1, overs: 4, maidens: 1, runs_conceded: 24, wickets: 3 },
    ]
  },
  {
    match_no: 3, team1_id: 2, team2_id: 7, venue_id: 2,
    date: "2024-03-23", toss_winner_id: 2, toss_decision: "BAT",
    winner_id: 2, win_margin: "8 runs", mom_player_id: 17,
    status: "COMPLETED",
    team1_score: "185/7", team2_score: "177/8",
    batting: [
      { player_id: 17, franchise_id: 2, team_id: 2, innings: 1, runs: 77, balls: 50, fours: 8, sixes: 3, dismissal: "OUT" },
      { player_id: 92, franchise_id: 7, team_id: 7, innings: 2, runs: 58, balls: 40, fours: 5, sixes: 2, dismissal: "OUT" },
      { player_id: 16, franchise_id: 2, team_id: 2, innings: 1, runs: 56, balls: 39, fours: 5, sixes: 2, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 98, franchise_id: 7, team_id: 7, innings: 1, overs: 4, maidens: 0, runs_conceded: 36, wickets: 2 },
      { player_id: 26, franchise_id: 2, team_id: 2, innings: 2, overs: 4, maidens: 0, runs_conceded: 29, wickets: 3 },
    ]
  },
  {
    match_no: 4, team1_id: 3, team2_id: 9, venue_id: 3,
    date: "2024-03-24", toss_winner_id: 9, toss_decision: "FIELD",
    winner_id: 3, win_margin: "4 wickets", mom_player_id: 32,
    status: "COMPLETED",
    team1_score: "162/7", team2_score: "164/6",
    batting: [
      { player_id: 32, franchise_id: 3, team_id: 3, innings: 2, runs: 72, balls: 47, fours: 7, sixes: 3, dismissal: "NOT OUT" },
      { player_id: 121, franchise_id: 9, team_id: 9, innings: 1, runs: 52, balls: 38, fours: 4, sixes: 2, dismissal: "OUT" },
      { player_id: 34, franchise_id: 3, team_id: 3, innings: 2, runs: 35, balls: 22, fours: 2, sixes: 3, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 38, franchise_id: 3, team_id: 3, innings: 1, overs: 4, maidens: 0, runs_conceded: 28, wickets: 3 },
      { player_id: 130, franchise_id: 9, team_id: 9, innings: 2, overs: 4, maidens: 0, runs_conceded: 35, wickets: 2 },
    ]
  },
  {
    match_no: 5, team1_id: 5, team2_id: 1, venue_id: 5,
    date: "2024-03-24", toss_winner_id: 1, toss_decision: "BAT",
    winner_id: 1, win_margin: "10 wickets", mom_player_id: 1,
    status: "COMPLETED",
    team1_score: "108/8", team2_score: "110/0",
    batting: [
      { player_id: 1, franchise_id: 1, team_id: 1, innings: 2, runs: 65, balls: 43, fours: 7, sixes: 2, dismissal: "NOT OUT" },
      { player_id: 2, franchise_id: 1, team_id: 1, innings: 2, runs: 44, balls: 30, fours: 4, sixes: 2, dismissal: "NOT OUT" },
      { player_id: 65, franchise_id: 5, team_id: 5, innings: 1, runs: 38, balls: 28, fours: 3, sixes: 1, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 8, franchise_id: 1, team_id: 1, innings: 1, overs: 4, maidens: 1, runs_conceded: 18, wickets: 4 },
      { player_id: 69, franchise_id: 5, team_id: 5, innings: 2, overs: 4, maidens: 0, runs_conceded: 32, wickets: 0 },
    ]
  },
  {
    match_no: 6, team1_id: 7, team2_id: 10, venue_id: 7,
    date: "2024-03-25", toss_winner_id: 7, toss_decision: "BAT",
    winner_id: 7, win_margin: "3 wickets", mom_player_id: 94,
    status: "COMPLETED",
    team1_score: "196/4", team2_score: "178/9",
    batting: [
      { player_id: 94, franchise_id: 7, team_id: 7, innings: 1, runs: 104, balls: 60, fours: 9, sixes: 6, dismissal: "OUT" },
      { player_id: 136, franchise_id: 10, team_id: 10, innings: 2, runs: 70, balls: 45, fours: 7, sixes: 3, dismissal: "OUT" },
      { player_id: 91, franchise_id: 7, team_id: 7, innings: 1, runs: 45, balls: 29, fours: 3, sixes: 2, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 100, franchise_id: 7, team_id: 7, innings: 2, overs: 4, maidens: 1, runs_conceded: 20, wickets: 3 },
      { player_id: 143, franchise_id: 10, team_id: 10, innings: 1, overs: 4, maidens: 0, runs_conceded: 38, wickets: 2 },
    ]
  },
  {
    match_no: 7, team1_id: 8, team2_id: 2, venue_id: 8,
    date: "2024-03-26", toss_winner_id: 2, toss_decision: "FIELD",
    winner_id: 8, win_margin: "4 wickets", mom_player_id: 108,
    status: "COMPLETED",
    team1_score: "175/6", team2_score: "176/6",
    batting: [
      { player_id: 108, franchise_id: 8, team_id: 8, innings: 2, runs: 68, balls: 46, fours: 6, sixes: 3, dismissal: "OUT" },
      { player_id: 17, franchise_id: 2, team_id: 2, innings: 1, runs: 63, balls: 42, fours: 5, sixes: 2, dismissal: "OUT" },
      { player_id: 107, franchise_id: 8, team_id: 8, innings: 2, runs: 52, balls: 35, fours: 4, sixes: 2, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 26, franchise_id: 2, team_id: 2, innings: 2, overs: 4, maidens: 0, runs_conceded: 34, wickets: 3 },
      { player_id: 113, franchise_id: 8, team_id: 8, innings: 1, overs: 4, maidens: 0, runs_conceded: 31, wickets: 2 },
    ]
  },
  {
    match_no: 8, team1_id: 1, team2_id: 4, venue_id: 1,
    date: "2024-03-27", toss_winner_id: 1, toss_decision: "BAT",
    winner_id: 1, win_margin: "7 runs", mom_player_id: 8,
    status: "COMPLETED",
    team1_score: "197/7", team2_score: "190/9",
    batting: [
      { player_id: 3, franchise_id: 1, team_id: 1, innings: 1, runs: 89, balls: 55, fours: 7, sixes: 5, dismissal: "OUT" },
      { player_id: 50, franchise_id: 4, team_id: 4, innings: 2, runs: 72, balls: 44, fours: 5, sixes: 5, dismissal: "OUT" },
      { player_id: 8, franchise_id: 1, team_id: 1, innings: 2, overs: 4, maidens: 0, runs_conceded: 25, wickets: 3, batting_runs: 15, batting_balls: 10, fours: 1, sixes: 0, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 8, franchise_id: 1, team_id: 1, innings: 2, overs: 4, maidens: 1, runs_conceded: 25, wickets: 3 },
      { player_id: 55, franchise_id: 4, team_id: 4, innings: 1, overs: 4, maidens: 0, runs_conceded: 38, wickets: 2 },
    ]
  },
  {
    match_no: 9, team1_id: 9, team2_id: 6, venue_id: 9,
    date: "2024-03-28", toss_winner_id: 6, toss_decision: "FIELD",
    winner_id: 9, win_margin: "20 runs", mom_player_id: 121,
    status: "COMPLETED",
    team1_score: "193/5", team2_score: "173/8",
    batting: [
      { player_id: 121, franchise_id: 9, team_id: 9, innings: 1, runs: 82, balls: 56, fours: 7, sixes: 3, dismissal: "OUT" },
      { player_id: 79, franchise_id: 6, team_id: 6, innings: 2, runs: 54, balls: 38, fours: 4, sixes: 2, dismissal: "OUT" },
      { player_id: 126, franchise_id: 9, team_id: 9, innings: 1, runs: 56, balls: 33, fours: 3, sixes: 4, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 129, franchise_id: 9, team_id: 9, innings: 2, overs: 4, maidens: 0, runs_conceded: 22, wickets: 4 },
      { player_id: 85, franchise_id: 6, team_id: 6, innings: 1, overs: 4, maidens: 0, runs_conceded: 33, wickets: 2 },
    ]
  },
  {
    match_no: 10, team1_id: 3, team2_id: 5, venue_id: 3,
    date: "2024-03-29", toss_winner_id: 5, toss_decision: "FIELD",
    winner_id: 3, win_margin: "47 runs", mom_player_id: 32,
    status: "COMPLETED",
    team1_score: "206/6", team2_score: "159/9",
    batting: [
      { player_id: 32, franchise_id: 3, team_id: 3, innings: 1, runs: 113, balls: 72, fours: 10, sixes: 7, dismissal: "OUT" },
      { player_id: 31, franchise_id: 3, team_id: 3, innings: 1, runs: 55, balls: 38, fours: 5, sixes: 2, dismissal: "OUT" },
      { player_id: 61, franchise_id: 5, team_id: 5, innings: 2, runs: 48, balls: 35, fours: 4, sixes: 2, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 38, franchise_id: 3, team_id: 3, innings: 2, overs: 4, maidens: 0, runs_conceded: 26, wickets: 3 },
      { player_id: 42, franchise_id: 3, team_id: 3, innings: 2, overs: 4, maidens: 0, runs_conceded: 29, wickets: 2 },
    ]
  },
  {
    match_no: 11, team1_id: 4, team2_id: 9, venue_id: 4,
    date: "2024-03-30", toss_winner_id: 4, toss_decision: "BAT",
    winner_id: 4, win_margin: "98 runs", mom_player_id: 50,
    status: "COMPLETED",
    team1_score: "222/5", team2_score: "124/10",
    batting: [
      { player_id: 50, franchise_id: 4, team_id: 4, innings: 1, runs: 100, balls: 54, fours: 8, sixes: 8, dismissal: "NOT OUT" },
      { player_id: 46, franchise_id: 4, team_id: 4, innings: 1, runs: 53, balls: 35, fours: 5, sixes: 2, dismissal: "OUT" },
      { player_id: 121, franchise_id: 9, team_id: 9, innings: 2, runs: 32, balls: 25, fours: 3, sixes: 1, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 55, franchise_id: 4, team_id: 4, innings: 2, overs: 4, maidens: 0, runs_conceded: 18, wickets: 4 },
      { player_id: 128, franchise_id: 9, team_id: 9, innings: 1, overs: 4, maidens: 0, runs_conceded: 42, wickets: 1 },
    ]
  },
  {
    match_no: 12, team1_id: 1, team2_id: 6, venue_id: 1,
    date: "2024-03-30", toss_winner_id: 1, toss_decision: "BAT",
    winner_id: 1, win_margin: "9 wickets", mom_player_id: 8,
    status: "COMPLETED",
    team1_score: "119/10", team2_score: "122/1",
    batting: [
      { player_id: 3, franchise_id: 1, team_id: 1, innings: 2, runs: 71, balls: 40, fours: 6, sixes: 4, dismissal: "NOT OUT" },
      { player_id: 80, franchise_id: 6, team_id: 6, innings: 1, runs: 35, balls: 28, fours: 3, sixes: 1, dismissal: "OUT" },
      { player_id: 1, franchise_id: 1, team_id: 1, innings: 2, runs: 45, balls: 28, fours: 4, sixes: 2, dismissal: "NOT OUT" },
    ],
    bowling: [
      { player_id: 8, franchise_id: 1, team_id: 1, innings: 1, overs: 4, maidens: 2, runs_conceded: 12, wickets: 4 },
      { player_id: 85, franchise_id: 6, team_id: 6, innings: 2, overs: 2, maidens: 0, runs_conceded: 26, wickets: 1 },
    ]
  },
  {
    match_no: 13, team1_id: 7, team2_id: 5, venue_id: 7,
    date: "2024-03-31", toss_winner_id: 5, toss_decision: "FIELD",
    winner_id: 7, win_margin: "12 runs", mom_player_id: 91,
    status: "COMPLETED",
    team1_score: "185/5", team2_score: "173/8",
    batting: [
      { player_id: 91, franchise_id: 7, team_id: 7, innings: 1, runs: 74, balls: 46, fours: 7, sixes: 3, dismissal: "OUT" },
      { player_id: 94, franchise_id: 7, team_id: 7, innings: 1, runs: 55, balls: 34, fours: 4, sixes: 3, dismissal: "OUT" },
      { player_id: 65, franchise_id: 5, team_id: 5, innings: 2, runs: 68, balls: 44, fours: 6, sixes: 2, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 100, franchise_id: 7, team_id: 7, innings: 2, overs: 4, maidens: 0, runs_conceded: 25, wickets: 3 },
      { player_id: 64, franchise_id: 5, team_id: 5, innings: 1, overs: 4, maidens: 0, runs_conceded: 32, wickets: 2 },
    ]
  },
  {
    match_no: 14, team1_id: 2, team2_id: 10, venue_id: 2,
    date: "2024-04-01", toss_winner_id: 2, toss_decision: "BAT",
    winner_id: 2, win_margin: "63 runs", mom_player_id: 16,
    status: "COMPLETED",
    team1_score: "212/3", team2_score: "149/9",
    batting: [
      { player_id: 16, franchise_id: 2, team_id: 2, innings: 1, runs: 88, balls: 58, fours: 8, sixes: 4, dismissal: "OUT" },
      { player_id: 21, franchise_id: 2, team_id: 2, innings: 1, runs: 44, balls: 22, fours: 3, sixes: 3, dismissal: "NOT OUT" },
      { player_id: 136, franchise_id: 10, team_id: 10, innings: 2, runs: 38, balls: 29, fours: 3, sixes: 1, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 26, franchise_id: 2, team_id: 2, innings: 2, overs: 4, maidens: 0, runs_conceded: 23, wickets: 4 },
      { player_id: 143, franchise_id: 10, team_id: 10, innings: 1, overs: 4, maidens: 0, runs_conceded: 35, wickets: 2 },
    ]
  },
  {
    match_no: 15, team1_id: 8, team2_id: 3, venue_id: 8,
    date: "2024-04-02", toss_winner_id: 3, toss_decision: "FIELD",
    winner_id: 8, win_margin: "25 runs", mom_player_id: 107,
    status: "COMPLETED",
    team1_score: "267/10", team2_score: "242/7",
    batting: [
      { player_id: 107, franchise_id: 8, team_id: 8, innings: 1, runs: 102, balls: 57, fours: 9, sixes: 7, dismissal: "OUT" },
      { player_id: 32, franchise_id: 3, team_id: 3, innings: 2, runs: 89, balls: 60, fours: 8, sixes: 4, dismissal: "NOT OUT" },
      { player_id: 109, franchise_id: 8, team_id: 8, innings: 1, runs: 78, balls: 48, fours: 6, sixes: 4, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 113, franchise_id: 8, team_id: 8, innings: 2, overs: 4, maidens: 0, runs_conceded: 36, wickets: 3 },
      { player_id: 38, franchise_id: 3, team_id: 3, innings: 1, overs: 4, maidens: 0, runs_conceded: 42, wickets: 2 },
    ]
  },
  {
    match_no: 16, team1_id: 6, team2_id: 4, venue_id: 6,
    date: "2024-04-04", toss_winner_id: 6, toss_decision: "BAT",
    winner_id: 4, win_margin: "7 wickets", mom_player_id: 48,
    status: "COMPLETED",
    team1_score: "143/9", team2_score: "144/3",
    batting: [
      { player_id: 48, franchise_id: 4, team_id: 4, innings: 2, runs: 70, balls: 45, fours: 6, sixes: 4, dismissal: "NOT OUT" },
      { player_id: 79, franchise_id: 6, team_id: 6, innings: 1, runs: 49, balls: 32, fours: 4, sixes: 2, dismissal: "OUT" },
      { player_id: 50, franchise_id: 4, team_id: 4, innings: 2, runs: 38, balls: 22, fours: 2, sixes: 3, dismissal: "NOT OUT" },
    ],
    bowling: [
      { player_id: 55, franchise_id: 4, team_id: 4, innings: 1, overs: 4, maidens: 0, runs_conceded: 22, wickets: 3 },
      { player_id: 84, franchise_id: 6, team_id: 6, innings: 2, overs: 3, maidens: 0, runs_conceded: 28, wickets: 2 },
    ]
  },
  {
    match_no: 17, team1_id: 10, team2_id: 1, venue_id: 10,
    date: "2024-04-05", toss_winner_id: 10, toss_decision: "FIELD",
    winner_id: 10, win_margin: "35 runs", mom_player_id: 143,
    status: "COMPLETED",
    team1_score: "189/9", team2_score: "154/9",
    batting: [
      { player_id: 136, franchise_id: 10, team_id: 10, innings: 1, runs: 72, balls: 48, fours: 7, sixes: 3, dismissal: "OUT" },
      { player_id: 3, franchise_id: 1, team_id: 1, innings: 2, runs: 62, balls: 42, fours: 5, sixes: 2, dismissal: "OUT" },
      { player_id: 143, franchise_id: 10, team_id: 10, innings: 2, overs: 4, maidens: 1, runs_conceded: 21, wickets: 4 },
    ],
    bowling: [
      { player_id: 143, franchise_id: 10, team_id: 10, innings: 2, overs: 4, maidens: 1, runs_conceded: 21, wickets: 4 },
      { player_id: 8, franchise_id: 1, team_id: 1, innings: 1, overs: 4, maidens: 0, runs_conceded: 32, wickets: 2 },
    ]
  },
  {
    match_no: 18, team1_id: 5, team2_id: 9, venue_id: 5,
    date: "2024-04-06", toss_winner_id: 9, toss_decision: "FIELD",
    winner_id: 5, win_margin: "1 wicket", mom_player_id: 64,
    status: "COMPLETED",
    team1_score: "166/9", team2_score: "167/9",
    batting: [
      { player_id: 121, franchise_id: 9, team_id: 9, innings: 1, runs: 68, balls: 48, fours: 6, sixes: 2, dismissal: "OUT" },
      { player_id: 65, franchise_id: 5, team_id: 5, innings: 2, runs: 44, balls: 30, fours: 4, sixes: 1, dismissal: "OUT" },
      { player_id: 64, franchise_id: 5, team_id: 5, innings: 2, runs: 38, balls: 24, fours: 2, sixes: 2, dismissal: "NOT OUT" },
    ],
    bowling: [
      { player_id: 69, franchise_id: 5, team_id: 5, innings: 1, overs: 4, maidens: 0, runs_conceded: 28, wickets: 3 },
      { player_id: 129, franchise_id: 9, team_id: 9, innings: 2, overs: 4, maidens: 0, runs_conceded: 30, wickets: 3 },
    ]
  },
  {
    match_no: 19, team1_id: 2, team2_id: 3, venue_id: 2,
    date: "2024-04-07", toss_winner_id: 3, toss_decision: "BAT",
    winner_id: 2, win_margin: "6 wickets", mom_player_id: 22,
    status: "COMPLETED",
    team1_score: "175/9", team2_score: "178/4",
    batting: [
      { player_id: 32, franchise_id: 3, team_id: 3, innings: 1, runs: 76, balls: 52, fours: 6, sixes: 3, dismissal: "OUT" },
      { player_id: 16, franchise_id: 2, team_id: 2, innings: 2, runs: 62, balls: 43, fours: 6, sixes: 2, dismissal: "NOT OUT" },
      { player_id: 22, franchise_id: 2, team_id: 2, innings: 2, runs: 42, balls: 26, fours: 2, sixes: 3, dismissal: "NOT OUT" },
    ],
    bowling: [
      { player_id: 22, franchise_id: 2, team_id: 2, innings: 1, overs: 4, maidens: 0, runs_conceded: 24, wickets: 3 },
      { player_id: 38, franchise_id: 3, team_id: 3, innings: 2, overs: 4, maidens: 0, runs_conceded: 34, wickets: 2 },
    ]
  },
  {
    match_no: 20, team1_id: 7, team2_id: 6, venue_id: 7,
    date: "2024-04-08", toss_winner_id: 7, toss_decision: "BAT",
    winner_id: 7, win_margin: "11 wickets", mom_player_id: 94,
    status: "COMPLETED",
    team1_score: "193/8", team2_score: "195/0",
    batting: [
      { player_id: 94, franchise_id: 7, team_id: 7, innings: 2, runs: 121, balls: 62, fours: 11, sixes: 8, dismissal: "NOT OUT" },
      { player_id: 92, franchise_id: 7, team_id: 7, innings: 2, runs: 72, balls: 45, fours: 6, sixes: 4, dismissal: "NOT OUT" },
      { player_id: 80, franchise_id: 6, team_id: 6, innings: 1, runs: 61, balls: 44, fours: 5, sixes: 2, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 100, franchise_id: 7, team_id: 7, innings: 1, overs: 4, maidens: 1, runs_conceded: 26, wickets: 3 },
      { player_id: 85, franchise_id: 6, team_id: 6, innings: 2, overs: 2, maidens: 0, runs_conceded: 28, wickets: 0 },
    ]
  },
  {
    match_no: 21, team1_id: 4, team2_id: 3, venue_id: 4,
    date: "2024-04-09", toss_winner_id: 3, toss_decision: "FIELD",
    winner_id: 4, win_margin: "1 run", mom_player_id: 54,
    status: "COMPLETED",
    team1_score: "222/7", team2_score: "221/6",
    batting: [
      { player_id: 50, franchise_id: 4, team_id: 4, innings: 1, runs: 87, balls: 51, fours: 7, sixes: 5, dismissal: "OUT" },
      { player_id: 32, franchise_id: 3, team_id: 3, innings: 2, runs: 96, balls: 64, fours: 8, sixes: 5, dismissal: "NOT OUT" },
      { player_id: 48, franchise_id: 4, team_id: 4, innings: 1, runs: 71, balls: 48, fours: 5, sixes: 4, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 54, franchise_id: 4, team_id: 4, innings: 2, overs: 4, maidens: 0, runs_conceded: 32, wickets: 3 },
      { player_id: 42, franchise_id: 3, team_id: 3, innings: 1, overs: 4, maidens: 0, runs_conceded: 40, wickets: 2 },
    ]
  },
  {
    match_no: 22, team1_id: 8, team2_id: 1, venue_id: 8,
    date: "2024-04-10", toss_winner_id: 1, toss_decision: "FIELD",
    winner_id: 8, win_margin: "2 wickets", mom_player_id: 107,
    status: "COMPLETED",
    team1_score: "168/7", team2_score: "171/8",
    batting: [
      { player_id: 107, franchise_id: 8, team_id: 8, innings: 2, runs: 75, balls: 49, fours: 7, sixes: 3, dismissal: "OUT" },
      { player_id: 3, franchise_id: 1, team_id: 1, innings: 1, runs: 66, balls: 44, fours: 5, sixes: 3, dismissal: "OUT" },
      { player_id: 4, franchise_id: 1, team_id: 1, innings: 1, runs: 40, balls: 26, fours: 3, sixes: 2, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 8, franchise_id: 1, team_id: 1, innings: 2, overs: 4, maidens: 0, runs_conceded: 29, wickets: 3 },
      { player_id: 113, franchise_id: 8, team_id: 8, innings: 1, overs: 4, maidens: 0, runs_conceded: 30, wickets: 2 },
    ]
  },
  {
    match_no: 23, team1_id: 9, team2_id: 2, venue_id: 9,
    date: "2024-04-11", toss_winner_id: 9, toss_decision: "BAT",
    winner_id: 2, win_margin: "15 runs", mom_player_id: 16,
    status: "COMPLETED",
    team1_score: "171/6", team2_score: "186/5",
    batting: [
      { player_id: 16, franchise_id: 2, team_id: 2, innings: 2, runs: 78, balls: 51, fours: 7, sixes: 3, dismissal: "OUT" },
      { player_id: 121, franchise_id: 9, team_id: 9, innings: 1, runs: 68, balls: 47, fours: 5, sixes: 2, dismissal: "OUT" },
      { player_id: 19, franchise_id: 2, team_id: 2, innings: 2, runs: 52, balls: 32, fours: 3, sixes: 3, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 26, franchise_id: 2, team_id: 2, innings: 1, overs: 4, maidens: 0, runs_conceded: 28, wickets: 3 },
      { player_id: 129, franchise_id: 9, team_id: 9, innings: 2, overs: 4, maidens: 0, runs_conceded: 35, wickets: 2 },
    ]
  },
  {
    match_no: 24, team1_id: 10, team2_id: 5, venue_id: 10,
    date: "2024-04-12", toss_winner_id: 5, toss_decision: "FIELD",
    winner_id: 10, win_margin: "8 wickets", mom_player_id: 136,
    status: "COMPLETED",
    team1_score: "187/7", team2_score: "190/2",
    batting: [
      { player_id: 136, franchise_id: 10, team_id: 10, innings: 2, runs: 98, balls: 62, fours: 9, sixes: 4, dismissal: "NOT OUT" },
      { player_id: 138, franchise_id: 10, team_id: 10, innings: 2, runs: 65, balls: 44, fours: 5, sixes: 2, dismissal: "NOT OUT" },
      { player_id: 65, franchise_id: 5, team_id: 5, innings: 1, runs: 56, balls: 39, fours: 4, sixes: 2, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 143, franchise_id: 10, team_id: 10, innings: 1, overs: 4, maidens: 1, runs_conceded: 22, wickets: 4 },
      { player_id: 69, franchise_id: 5, team_id: 5, innings: 2, overs: 2, maidens: 0, runs_conceded: 28, wickets: 0 },
    ]
  },
  {
    match_no: 25, team1_id: 1, team2_id: 7, venue_id: 1,
    date: "2024-04-13", toss_winner_id: 7, toss_decision: "BAT",
    winner_id: 7, win_margin: "5 wickets", mom_player_id: 91,
    status: "COMPLETED",
    team1_score: "155/9", team2_score: "157/5",
    batting: [
      { player_id: 91, franchise_id: 7, team_id: 7, innings: 2, runs: 60, balls: 40, fours: 5, sixes: 2, dismissal: "NOT OUT" },
      { player_id: 4, franchise_id: 1, team_id: 1, innings: 1, runs: 55, balls: 36, fours: 4, sixes: 3, dismissal: "OUT" },
      { player_id: 92, franchise_id: 7, team_id: 7, innings: 2, runs: 42, balls: 29, fours: 4, sixes: 1, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 100, franchise_id: 7, team_id: 7, innings: 1, overs: 4, maidens: 0, runs_conceded: 22, wickets: 3 },
      { player_id: 8, franchise_id: 1, team_id: 1, innings: 2, overs: 4, maidens: 0, runs_conceded: 30, wickets: 2 },
    ]
  },
  {
    match_no: 26, team1_id: 6, team2_id: 2, venue_id: 6,
    date: "2024-04-14", toss_winner_id: 2, toss_decision: "FIELD",
    winner_id: 6, win_margin: "4 wickets", mom_player_id: 80,
    status: "COMPLETED",
    team1_score: "163/7", team2_score: "167/6",
    batting: [
      { player_id: 80, franchise_id: 6, team_id: 6, innings: 2, runs: 68, balls: 46, fours: 6, sixes: 2, dismissal: "NOT OUT" },
      { player_id: 16, franchise_id: 2, team_id: 2, innings: 1, runs: 54, balls: 38, fours: 5, sixes: 1, dismissal: "OUT" },
      { player_id: 79, franchise_id: 6, team_id: 6, innings: 2, runs: 45, balls: 30, fours: 3, sixes: 2, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 85, franchise_id: 6, team_id: 6, innings: 1, overs: 4, maidens: 0, runs_conceded: 28, wickets: 3 },
      { player_id: 26, franchise_id: 2, team_id: 2, innings: 2, overs: 4, maidens: 0, runs_conceded: 34, wickets: 2 },
    ]
  },
  {
    match_no: 27, team1_id: 3, team2_id: 8, venue_id: 3,
    date: "2024-04-15", toss_winner_id: 8, toss_decision: "FIELD",
    winner_id: 3, win_margin: "17 runs", mom_player_id: 32,
    status: "COMPLETED",
    team1_score: "218/5", team2_score: "201/7",
    batting: [
      { player_id: 32, franchise_id: 3, team_id: 3, innings: 1, runs: 92, balls: 59, fours: 8, sixes: 5, dismissal: "OUT" },
      { player_id: 107, franchise_id: 8, team_id: 8, innings: 2, runs: 78, balls: 50, fours: 7, sixes: 3, dismissal: "OUT" },
      { player_id: 34, franchise_id: 3, team_id: 3, innings: 1, runs: 65, balls: 42, fours: 4, sixes: 4, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 38, franchise_id: 3, team_id: 3, innings: 2, overs: 4, maidens: 0, runs_conceded: 34, wickets: 3 },
      { player_id: 113, franchise_id: 8, team_id: 8, innings: 1, overs: 4, maidens: 0, runs_conceded: 42, wickets: 1 },
    ]
  },
  {
    match_no: 28, team1_id: 9, team2_id: 4, venue_id: 9,
    date: "2024-04-16", toss_winner_id: 4, toss_decision: "FIELD",
    winner_id: 4, win_margin: "23 runs", mom_player_id: 55,
    status: "COMPLETED",
    team1_score: "172/7", team2_score: "195/4",
    batting: [
      { player_id: 50, franchise_id: 4, team_id: 4, innings: 2, runs: 76, balls: 47, fours: 6, sixes: 4, dismissal: "OUT" },
      { player_id: 121, franchise_id: 9, team_id: 9, innings: 1, runs: 58, balls: 42, fours: 5, sixes: 1, dismissal: "OUT" },
      { player_id: 46, franchise_id: 4, team_id: 4, innings: 2, runs: 62, balls: 44, fours: 5, sixes: 2, dismissal: "NOT OUT" },
    ],
    bowling: [
      { player_id: 55, franchise_id: 4, team_id: 4, innings: 1, overs: 4, maidens: 1, runs_conceded: 19, wickets: 4 },
      { player_id: 129, franchise_id: 9, team_id: 9, innings: 2, overs: 4, maidens: 0, runs_conceded: 36, wickets: 2 },
    ]
  },
  {
    match_no: 29, team1_id: 1, team2_id: 2, venue_id: 1,
    date: "2024-04-17", toss_winner_id: 1, toss_decision: "BAT",
    winner_id: 2, win_margin: "20 runs", mom_player_id: 22,
    status: "COMPLETED",
    team1_score: "189/6", team2_score: "210/5",
    batting: [
      { player_id: 22, franchise_id: 2, team_id: 2, innings: 2, runs: 75, balls: 48, fours: 7, sixes: 3, dismissal: "NOT OUT" },
      { player_id: 3, franchise_id: 1, team_id: 1, innings: 1, runs: 70, balls: 46, fours: 6, sixes: 2, dismissal: "OUT" },
      { player_id: 16, franchise_id: 2, team_id: 2, innings: 2, runs: 68, balls: 47, fours: 6, sixes: 2, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 26, franchise_id: 2, team_id: 2, innings: 1, overs: 4, maidens: 0, runs_conceded: 30, wickets: 3 },
      { player_id: 8, franchise_id: 1, team_id: 1, innings: 2, overs: 4, maidens: 0, runs_conceded: 38, wickets: 2 },
    ]
  },
  {
    match_no: 30, team1_id: 5, team2_id: 10, venue_id: 5,
    date: "2024-04-18", toss_winner_id: 10, toss_decision: "BAT",
    winner_id: 10, win_margin: "9 wickets", mom_player_id: 143,
    status: "COMPLETED",
    team1_score: "116/10", team2_score: "120/1",
    batting: [
      { player_id: 136, franchise_id: 10, team_id: 10, innings: 2, runs: 70, balls: 44, fours: 7, sixes: 3, dismissal: "NOT OUT" },
      { player_id: 65, franchise_id: 5, team_id: 5, innings: 1, runs: 42, balls: 31, fours: 4, sixes: 1, dismissal: "OUT" },
      { player_id: 143, franchise_id: 10, team_id: 10, innings: 1, overs: 4, maidens: 1, runs_conceded: 15, wickets: 4 },
    ],
    bowling: [
      { player_id: 143, franchise_id: 10, team_id: 10, innings: 1, overs: 4, maidens: 1, runs_conceded: 15, wickets: 4 },
      { player_id: 69, franchise_id: 5, team_id: 5, innings: 2, overs: 2, maidens: 0, runs_conceded: 22, wickets: 1 },
    ]
  },
  {
    match_no: 31, team1_id: 7, team2_id: 1, venue_id: 7,
    date: "2024-04-19", toss_winner_id: 1, toss_decision: "FIELD",
    winner_id: 1, win_margin: "3 wickets", mom_player_id: 4,
    status: "COMPLETED",
    team1_score: "163/8", team2_score: "167/7",
    batting: [
      { player_id: 94, franchise_id: 7, team_id: 7, innings: 1, runs: 61, balls: 42, fours: 5, sixes: 2, dismissal: "OUT" },
      { player_id: 4, franchise_id: 1, team_id: 1, innings: 2, runs: 58, balls: 36, fours: 4, sixes: 3, dismissal: "NOT OUT" },
      { player_id: 3, franchise_id: 1, team_id: 1, innings: 2, runs: 52, balls: 38, fours: 4, sixes: 2, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 8, franchise_id: 1, team_id: 1, innings: 1, overs: 4, maidens: 0, runs_conceded: 26, wickets: 3 },
      { player_id: 100, franchise_id: 7, team_id: 7, innings: 2, overs: 4, maidens: 0, runs_conceded: 33, wickets: 3 },
    ]
  },
  {
    match_no: 32, team1_id: 6, team2_id: 9, venue_id: 6,
    date: "2024-04-20", toss_winner_id: 9, toss_decision: "BAT",
    winner_id: 9, win_margin: "39 runs", mom_player_id: 126,
    status: "COMPLETED",
    team1_score: "153/9", team2_score: "192/5",
    batting: [
      { player_id: 126, franchise_id: 9, team_id: 9, innings: 1, runs: 80, balls: 50, fours: 7, sixes: 4, dismissal: "OUT" },
      { player_id: 80, franchise_id: 6, team_id: 6, innings: 2, runs: 55, balls: 40, fours: 4, sixes: 2, dismissal: "OUT" },
      { player_id: 121, franchise_id: 9, team_id: 9, innings: 1, runs: 52, balls: 38, fours: 4, sixes: 1, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 129, franchise_id: 9, team_id: 9, innings: 2, overs: 4, maidens: 0, runs_conceded: 24, wickets: 4 },
      { player_id: 84, franchise_id: 6, team_id: 6, innings: 1, overs: 4, maidens: 0, runs_conceded: 38, wickets: 2 },
    ]
  },
  {
    match_no: 33, team1_id: 2, team2_id: 8, venue_id: 2,
    date: "2024-04-21", toss_winner_id: 8, toss_decision: "FIELD",
    winner_id: 2, win_margin: "8 wickets", mom_player_id: 17,
    status: "COMPLETED",
    team1_score: "148/9", team2_score: "152/2",
    batting: [
      { player_id: 17, franchise_id: 2, team_id: 2, innings: 2, runs: 72, balls: 48, fours: 7, sixes: 3, dismissal: "NOT OUT" },
      { player_id: 107, franchise_id: 8, team_id: 8, innings: 1, runs: 58, balls: 40, fours: 5, sixes: 2, dismissal: "OUT" },
      { player_id: 16, franchise_id: 2, team_id: 2, innings: 2, runs: 50, balls: 32, fours: 4, sixes: 2, dismissal: "NOT OUT" },
    ],
    bowling: [
      { player_id: 26, franchise_id: 2, team_id: 2, innings: 1, overs: 4, maidens: 1, runs_conceded: 16, wickets: 4 },
      { player_id: 113, franchise_id: 8, team_id: 8, innings: 2, overs: 3, maidens: 0, runs_conceded: 28, wickets: 2 },
    ]
  },
  {
    match_no: 34, team1_id: 3, team2_id: 7, venue_id: 3,
    date: "2024-04-22", toss_winner_id: 7, toss_decision: "FIELD",
    winner_id: 7, win_margin: "6 wickets", mom_player_id: 91,
    status: "COMPLETED",
    team1_score: "175/8", team2_score: "179/4",
    batting: [
      { player_id: 32, franchise_id: 3, team_id: 3, innings: 1, runs: 69, balls: 48, fours: 6, sixes: 2, dismissal: "OUT" },
      { player_id: 91, franchise_id: 7, team_id: 7, innings: 2, runs: 72, balls: 46, fours: 6, sixes: 3, dismissal: "NOT OUT" },
      { player_id: 94, franchise_id: 7, team_id: 7, innings: 2, runs: 55, balls: 36, fours: 5, sixes: 2, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 100, franchise_id: 7, team_id: 7, innings: 1, overs: 4, maidens: 0, runs_conceded: 30, wickets: 3 },
      { player_id: 38, franchise_id: 3, team_id: 3, innings: 2, overs: 3, maidens: 0, runs_conceded: 32, wickets: 2 },
    ]
  },
  {
    match_no: 35, team1_id: 4, team2_id: 1, venue_id: 4,
    date: "2024-04-23", toss_winner_id: 4, toss_decision: "BAT",
    winner_id: 4, win_margin: "18 runs", mom_player_id: 54,
    status: "COMPLETED",
    team1_score: "201/5", team2_score: "183/7",
    batting: [
      { player_id: 48, franchise_id: 4, team_id: 4, innings: 1, runs: 88, balls: 55, fours: 8, sixes: 4, dismissal: "OUT" },
      { player_id: 3, franchise_id: 1, team_id: 1, innings: 2, runs: 74, balls: 50, fours: 6, sixes: 3, dismissal: "OUT" },
      { player_id: 50, franchise_id: 4, team_id: 4, innings: 1, runs: 60, balls: 36, fours: 4, sixes: 4, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 54, franchise_id: 4, team_id: 4, innings: 2, overs: 4, maidens: 0, runs_conceded: 28, wickets: 4 },
      { player_id: 8, franchise_id: 1, team_id: 1, innings: 1, overs: 4, maidens: 0, runs_conceded: 35, wickets: 2 },
    ]
  },
  {
    match_no: 36, team1_id: 10, team2_id: 6, venue_id: 10,
    date: "2024-04-24", toss_winner_id: 10, toss_decision: "BAT",
    winner_id: 10, win_margin: "31 runs", mom_player_id: 136,
    status: "COMPLETED",
    team1_score: "214/6", team2_score: "183/9",
    batting: [
      { player_id: 136, franchise_id: 10, team_id: 10, innings: 1, runs: 91, balls: 61, fours: 8, sixes: 4, dismissal: "OUT" },
      { player_id: 138, franchise_id: 10, team_id: 10, innings: 1, runs: 55, balls: 38, fours: 4, sixes: 2, dismissal: "OUT" },
      { player_id: 80, franchise_id: 6, team_id: 6, innings: 2, runs: 64, balls: 44, fours: 5, sixes: 2, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 143, franchise_id: 10, team_id: 10, innings: 2, overs: 4, maidens: 0, runs_conceded: 29, wickets: 3 },
      { player_id: 85, franchise_id: 6, team_id: 6, innings: 1, overs: 4, maidens: 0, runs_conceded: 40, wickets: 1 },
    ]
  },
  {
    match_no: 37, team1_id: 5, team2_id: 3, venue_id: 5,
    date: "2024-04-25", toss_winner_id: 3, toss_decision: "BAT",
    winner_id: 3, win_margin: "45 runs", mom_player_id: 32,
    status: "COMPLETED",
    team1_score: "198/4", team2_score: "153/9",
    batting: [
      { player_id: 32, franchise_id: 3, team_id: 3, innings: 1, runs: 108, balls: 67, fours: 10, sixes: 6, dismissal: "OUT" },
      { player_id: 65, franchise_id: 5, team_id: 5, innings: 2, runs: 48, balls: 34, fours: 4, sixes: 1, dismissal: "OUT" },
      { player_id: 34, franchise_id: 3, team_id: 3, innings: 1, runs: 46, balls: 28, fours: 3, sixes: 3, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 38, franchise_id: 3, team_id: 3, innings: 2, overs: 4, maidens: 0, runs_conceded: 24, wickets: 4 },
      { player_id: 42, franchise_id: 3, team_id: 3, innings: 2, overs: 4, maidens: 0, runs_conceded: 28, wickets: 2 },
    ]
  },
  {
    match_no: 38, team1_id: 9, team2_id: 7, venue_id: 9,
    date: "2024-04-26", toss_winner_id: 7, toss_decision: "FIELD",
    winner_id: 9, win_margin: "14 runs", mom_player_id: 129,
    status: "COMPLETED",
    team1_score: "181/6", team2_score: "167/8",
    batting: [
      { player_id: 126, franchise_id: 9, team_id: 9, innings: 1, runs: 65, balls: 43, fours: 5, sixes: 3, dismissal: "OUT" },
      { player_id: 91, franchise_id: 7, team_id: 7, innings: 2, runs: 62, balls: 42, fours: 5, sixes: 2, dismissal: "OUT" },
      { player_id: 121, franchise_id: 9, team_id: 9, innings: 1, runs: 48, balls: 34, fours: 4, sixes: 1, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 129, franchise_id: 9, team_id: 9, innings: 2, overs: 4, maidens: 0, runs_conceded: 21, wickets: 4 },
      { player_id: 100, franchise_id: 7, team_id: 7, innings: 1, overs: 4, maidens: 0, runs_conceded: 33, wickets: 2 },
    ]
  },
  {
    match_no: 39, team1_id: 8, team2_id: 10, venue_id: 8,
    date: "2024-04-27", toss_winner_id: 10, toss_decision: "FIELD",
    winner_id: 8, win_margin: "2 wickets", mom_player_id: 109,
    status: "COMPLETED",
    team1_score: "182/6", team2_score: "186/8",
    batting: [
      { player_id: 109, franchise_id: 8, team_id: 8, innings: 2, runs: 78, balls: 50, fours: 7, sixes: 3, dismissal: "NOT OUT" },
      { player_id: 136, franchise_id: 10, team_id: 10, innings: 1, runs: 72, balls: 48, fours: 6, sixes: 3, dismissal: "OUT" },
      { player_id: 107, franchise_id: 8, team_id: 8, innings: 2, runs: 55, balls: 38, fours: 4, sixes: 2, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 113, franchise_id: 8, team_id: 8, innings: 1, overs: 4, maidens: 0, runs_conceded: 32, wickets: 2 },
      { player_id: 143, franchise_id: 10, team_id: 10, innings: 2, overs: 4, maidens: 0, runs_conceded: 38, wickets: 3 },
    ]
  },
  {
    match_no: 40, team1_id: 2, team2_id: 4, venue_id: 2,
    date: "2024-04-28", toss_winner_id: 4, toss_decision: "FIELD",
    winner_id: 4, win_margin: "3 wickets", mom_player_id: 48,
    status: "COMPLETED",
    team1_score: "180/6", team2_score: "183/7",
    batting: [
      { player_id: 48, franchise_id: 4, team_id: 4, innings: 2, runs: 76, balls: 49, fours: 7, sixes: 3, dismissal: "NOT OUT" },
      { player_id: 16, franchise_id: 2, team_id: 2, innings: 1, runs: 66, balls: 45, fours: 6, sixes: 2, dismissal: "OUT" },
      { player_id: 17, franchise_id: 2, team_id: 2, innings: 1, runs: 58, balls: 40, fours: 5, sixes: 2, dismissal: "OUT" },
    ],
    bowling: [
      { player_id: 55, franchise_id: 4, team_id: 4, innings: 1, overs: 4, maidens: 0, runs_conceded: 28, wickets: 3 },
      { player_id: 26, franchise_id: 2, team_id: 2, innings: 2, overs: 4, maidens: 0, runs_conceded: 35, wickets: 2 },
    ]
  }
];
