// db.js — LocalStorage-backed mock database (Oracle DDL/DML compatible schema)
// Mirrors: FRANCHISES, VENUES, PLAYERS, MATCHES, BATTING_PERFORMANCES, BOWLING_PERFORMANCES

import { FRANCHISES } from './franchises';
import { VENUES } from './venues';
import { PLAYERS } from './players';
import { COMPLETED_MATCHES } from './matchesData';
import { STAGING_MATCHES } from './stagingMatches';

const DB_KEY = 'crickstats_db';
const STAGING_POINTER_KEY = 'crickstats_staging_ptr';

function initDB() {
  const existing = localStorage.getItem(DB_KEY);
  if (existing) return JSON.parse(existing);

  // Seed initial DB — only matches 1-40
  const db = {
    franchises: FRANCHISES,
    venues: VENUES,
    players: PLAYERS,
    matches: COMPLETED_MATCHES.map(m => ({
      match_no: m.match_no,
      team1_id: m.team1_id,
      team2_id: m.team2_id,
      venue_id: m.venue_id,
      match_date: m.date,
      toss_winner_id: m.toss_winner_id,
      toss_decision: m.toss_decision,
      winner_id: m.winner_id,
      win_margin: m.win_margin,
      mom_player_id: m.mom_player_id,
      status: 'COMPLETED',
      match_type: m.match_type || 'LEAGUE',
      team1_score: m.team1_score,
      team2_score: m.team2_score,
    })),
    batting_performances: COMPLETED_MATCHES.flatMap(m =>
      m.batting.map(b => ({
        ...b,
        match_no: m.match_no,
        batting_runs: b.batting_runs !== undefined ? b.batting_runs : b.runs,
      }))
    ),
    bowling_performances: COMPLETED_MATCHES.flatMap(m =>
      m.bowling.map(b => ({ ...b, match_no: m.match_no }))
    ),
  };

  localStorage.setItem(DB_KEY, JSON.stringify(db));
  localStorage.setItem(STAGING_POINTER_KEY, JSON.stringify({ next_index: 0 }));
  return db;
}

export function getDB() {
  return initDB();
}

export function saveDB(db) {
  localStorage.setItem(DB_KEY, JSON.stringify(db));
}

export function resetDB() {
  localStorage.removeItem(DB_KEY);
  localStorage.removeItem(STAGING_POINTER_KEY);
  return initDB();
}

export function getStagingPointer() {
  const ptr = localStorage.getItem(STAGING_POINTER_KEY);
  return ptr ? JSON.parse(ptr) : { next_index: 0 };
}

export function setStagingPointer(index) {
  localStorage.setItem(STAGING_POINTER_KEY, JSON.stringify({ next_index: index }));
}

export function peekNextStagingMatch() {
  const { next_index } = getStagingPointer();
  if (next_index >= STAGING_MATCHES.length) return null;
  return { match: STAGING_MATCHES[next_index], index: next_index };
}

export function commitNextStagingMatch() {
  const { next_index } = getStagingPointer();
  if (next_index >= STAGING_MATCHES.length) return { success: false, message: 'No more staging matches.' };

  const stagingMatch = STAGING_MATCHES[next_index];
  const db = getDB();

  // INSERT into MATCHES
  db.matches.push({
    match_no: stagingMatch.match_no,
    team1_id: stagingMatch.team1_id,
    team2_id: stagingMatch.team2_id,
    venue_id: stagingMatch.venue_id,
    match_date: stagingMatch.date,
    toss_winner_id: stagingMatch.toss_winner_id,
    toss_decision: stagingMatch.toss_decision,
    winner_id: stagingMatch.winner_id,
    win_margin: stagingMatch.win_margin,
    mom_player_id: stagingMatch.mom_player_id,
    status: 'COMPLETED',
    match_type: stagingMatch.match_type || 'LEAGUE',
    team1_score: stagingMatch.team1_score,
    team2_score: stagingMatch.team2_score,
  });

  // INSERT into BATTING_PERFORMANCES
  stagingMatch.batting.forEach(b => {
    db.batting_performances.push({ ...b, match_no: stagingMatch.match_no });
  });

  // INSERT into BOWLING_PERFORMANCES
  stagingMatch.bowling.forEach(b => {
    db.bowling_performances.push({ ...b, match_no: stagingMatch.match_no });
  });

  saveDB(db);
  setStagingPointer(next_index + 1);

  return { success: true, match: stagingMatch, message: `Match ${stagingMatch.match_no} committed to DB.` };
}

// ─── QUERY HELPERS ───

export function getAllMatches() {
  return getDB().matches.sort((a, b) => b.match_no - a.match_no);
}

export function getMatchByNo(match_no) {
  return getDB().matches.find(m => m.match_no === match_no);
}

export function getBattingForMatch(match_no) {
  return getDB().batting_performances.filter(b => b.match_no === match_no);
}

export function getBowlingForMatch(match_no) {
  return getDB().bowling_performances.filter(b => b.match_no === match_no);
}

export function getPointsTable() {
  const db = getDB();
  const points = {};
  db.franchises.forEach(f => {
    points[f.franchise_id] = { franchise_id: f.franchise_id, played: 0, won: 0, lost: 0, tied: 0, nr: 0, points: 0, nrr: 0 };
  });

  db.matches.forEach(m => {
    if (!m.winner_id) return;
    const t1 = m.team1_id, t2 = m.team2_id;
    if (!points[t1] || !points[t2]) return;

    points[t1].played++;
    points[t2].played++;

    if (m.win_margin === 'NO RESULT') {
      points[t1].nr++; points[t1].points += 1;
      points[t2].nr++; points[t2].points += 1;
    } else if (m.winner_id === t1) {
      points[t1].won++; points[t1].points += 2;
      points[t2].lost++;
    } else {
      points[t2].won++; points[t2].points += 2;
      points[t1].lost++;
    }
  });

  return Object.values(points).sort((a, b) => b.points - a.points || b.won - a.won);
}

export function getOrangeCap() {
  const db = getDB();
  const runs = {};
  db.batting_performances.forEach(b => {
    if (!runs[b.player_id]) runs[b.player_id] = { player_id: b.player_id, franchise_id: b.franchise_id, runs: 0, innings: 0, highest: 0 };
    runs[b.player_id].runs += b.runs || 0;
    runs[b.player_id].innings++;
    if (b.runs > runs[b.player_id].highest) runs[b.player_id].highest = b.runs;
  });
  return Object.values(runs).sort((a, b) => b.runs - a.runs).slice(0, 10);
}

export function getPurpleCap() {
  const db = getDB();
  const wickets = {};
  db.bowling_performances.forEach(b => {
    if (!wickets[b.player_id]) wickets[b.player_id] = { player_id: b.player_id, franchise_id: b.franchise_id, wickets: 0, overs: 0, runs: 0, innings: 0 };
    wickets[b.player_id].wickets += b.wickets || 0;
    wickets[b.player_id].overs += b.overs || 0;
    wickets[b.player_id].runs += b.runs_conceded || 0;
    wickets[b.player_id].innings++;
  });
  return Object.values(wickets).sort((a, b) => b.wickets - a.wickets).slice(0, 10);
}

// ─── ADMIN CRUD ───

export function updatePlayer(player_id, updates) {
  const db = getDB();
  const idx = db.players.findIndex(p => p.player_id === player_id);
  if (idx === -1) return false;
  db.players[idx] = { ...db.players[idx], ...updates };
  saveDB(db);
  return true;
}

export function addMatch(matchData) {
  const db = getDB();
  const match_no = db.matches.length > 0 ? Math.max(...db.matches.map(m => m.match_no)) + 1 : 1;
  db.matches.push({ ...matchData, match_no, status: 'COMPLETED' });
  saveDB(db);
  return match_no;
}

export function updateMatch(match_no, updates) {
  const db = getDB();
  const idx = db.matches.findIndex(m => m.match_no === match_no);
  if (idx === -1) return false;
  db.matches[idx] = { ...db.matches[idx], ...updates };
  saveDB(db);
  return true;
}

export function addBattingPerformance(perf) {
  const db = getDB();
  db.batting_performances.push(perf);
  saveDB(db);
}

export function addBowlingPerformance(perf) {
  const db = getDB();
  db.bowling_performances.push(perf);
  saveDB(db);
}
