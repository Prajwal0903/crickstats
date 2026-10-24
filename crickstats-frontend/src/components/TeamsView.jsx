// TeamsView.jsx — Franchise roster + team stats
import { useState } from 'react';
import { Users, Target, Search } from 'lucide-react';
import { FRANCHISES } from '../data/franchises';
import { PLAYERS } from '../data/players';
import { getDB } from '../data/db';
import TeamBadge from './TeamBadge';

const ROLE_COLORS = {
  'Batsman': { bg: 'rgba(59,130,246,0.15)', color: '#60a5fa', border: 'rgba(59,130,246,0.3)' },
  'Bowler': { bg: 'rgba(239,68,68,0.12)', color: '#f87171', border: 'rgba(239,68,68,0.25)' },
  'All-Rounder': { bg: 'rgba(16,185,129,0.12)', color: '#34d399', border: 'rgba(16,185,129,0.25)' },
  'WK-Batsman': { bg: 'rgba(245,158,11,0.12)', color: '#fbbf24', border: 'rgba(245,158,11,0.25)' },
};

function RolePill({ role }) {
  const style = ROLE_COLORS[role] || { bg: 'rgba(255,255,255,0.05)', color: '#8ba3c7', border: '#1e2d4a' };
  return (
    <span style={{
      background: style.bg, color: style.color, border: `1px solid ${style.border}`,
      fontSize: 11, fontWeight: 600, padding: '2px 8px', borderRadius: 20,
    }}>
      {role}
    </span>
  );
}

export default function TeamsView() {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [search, setSearch] = useState('');
  const db = getDB();

  const franchise = selectedTeam ? FRANCHISES.find(f => f.franchise_id === selectedTeam) : null;
  const players = selectedTeam ? PLAYERS.filter(p => p.franchise_id === selectedTeam) : [];

  const getPlayerStats = (player_id) => {
    const batting = db.batting_performances.filter(b => b.player_id === player_id);
    const bowling = db.bowling_performances.filter(b => b.player_id === player_id);
    const runs = batting.reduce((s, b) => s + (b.runs || 0), 0);
    const wickets = bowling.reduce((s, b) => s + (b.wickets || 0), 0);
    return { runs, wickets, innings: batting.length, matchesInvolved: new Set([...batting.map(b => b.match_no), ...bowling.map(b => b.match_no)]).size };
  };

  const filteredPlayers = players.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="section-title" style={{ marginBottom: 24 }}>
        <Users size={22} color="#f59e0b" />
        IPL 2024 Teams & Rosters
      </div>

      {!selectedTeam ? (
        // Team grid
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
          {FRANCHISES.map(f => {
            const teamMatches = db.matches.filter(m => m.team1_id === f.franchise_id || m.team2_id === f.franchise_id);
            const wins = teamMatches.filter(m => m.winner_id === f.franchise_id).length;
            const playerCount = PLAYERS.filter(p => p.franchise_id === f.franchise_id).length;

            return (
              <div
                key={f.franchise_id}
                className="glass-card glass-card-hover"
                style={{ padding: 24, cursor: 'pointer' }}
                onClick={() => setSelectedTeam(f.franchise_id)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                  <TeamBadge franchiseId={f.franchise_id} size="xl" />
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 16, color: '#f0f6ff' }}>{f.name}</div>
                    <div style={{ fontSize: 12, color: '#4a6080', marginTop: 2 }}>{f.city} • {f.abbr}</div>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 16 }}>
                  {[
                    { label: 'Played', value: teamMatches.length },
                    { label: 'Won', value: wins },
                    { label: 'Titles', value: f.titles },
                  ].map(s => (
                    <div key={s.label} style={{ textAlign: 'center', padding: '10px 0', background: 'rgba(0,0,0,0.2)', borderRadius: 8 }}>
                      <div style={{ fontSize: 20, fontWeight: 900, color: '#f59e0b', fontFamily: 'Rajdhani, sans-serif' }}>{s.value}</div>
                      <div style={{ fontSize: 10, color: '#4a6080', fontWeight: 600, textTransform: 'uppercase' }}>{s.label}</div>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#8ba3c7' }}>
                  <span>👨‍💼 {f.captain}</span>
                  <span>{playerCount} players</span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        // Roster view
        <div>
          <button onClick={() => { setSelectedTeam(null); setSearch(''); }} className="btn-ghost" style={{ marginBottom: 20, display: 'flex', alignItems: 'center', gap: 6, fontSize: 13 }}>
            ← Back to Teams
          </button>

          {/* Franchise header */}
          <div className="glass-card" style={{ padding: 24, marginBottom: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <TeamBadge franchiseId={franchise.franchise_id} size="xl" />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 24, fontWeight: 900, color: '#f0f6ff' }}>{franchise.name}</div>
                <div style={{ fontSize: 14, color: '#8ba3c7', marginTop: 4 }}>
                  📍 {franchise.home_ground}, {franchise.city}
                </div>
                <div style={{ display: 'flex', gap: 20, marginTop: 10, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 13, color: '#8ba3c7' }}>👑 Captain: <strong style={{ color: '#f0f6ff' }}>{franchise.captain}</strong></span>
                  <span style={{ fontSize: 13, color: '#8ba3c7' }}>🏋️ Coach: <strong style={{ color: '#f0f6ff' }}>{franchise.coach}</strong></span>
                  <span style={{ fontSize: 13, color: '#8ba3c7' }}>🏆 Titles: <strong style={{ color: '#f59e0b' }}>{franchise.titles}</strong></span>
                </div>
              </div>
            </div>
          </div>

          {/* Player search */}
          <div style={{ position: 'relative', marginBottom: 16 }}>
            <Search size={15} color="#4a6080" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)' }} />
            <input
              className="form-input"
              style={{ paddingLeft: 36 }}
              placeholder="Search players by name or role..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          {/* Players table */}
          <div className="glass-card" style={{ overflow: 'hidden' }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Player</th>
                  <th>Role</th>
                  <th>Bat</th>
                  <th>Bowl</th>
                  <th style={{ textAlign: 'right' }}>Season Runs</th>
                  <th style={{ textAlign: 'right' }}>Season Wkts</th>
                  <th style={{ textAlign: 'right' }}>Matches</th>
                </tr>
              </thead>
              <tbody>
                {filteredPlayers.map((player, idx) => {
                  const stats = getPlayerStats(player.player_id);
                  return (
                    <tr key={player.player_id}>
                      <td style={{ color: '#4a6080' }}>{idx + 1}</td>
                      <td>
                        <div style={{ fontWeight: 700, color: '#f0f6ff' }}>{player.name}</div>
                        <div style={{ fontSize: 11, color: '#4a6080' }}>{player.nationality}</div>
                      </td>
                      <td><RolePill role={player.role} /></td>
                      <td style={{ fontSize: 12 }}>{player.bat_style || '—'}</td>
                      <td style={{ fontSize: 12 }}>{player.bowl_style || '—'}</td>
                      <td style={{ textAlign: 'right', fontWeight: 700, color: stats.runs > 0 ? '#fbbf24' : '#4a6080' }}>
                        {stats.runs || 0}
                      </td>
                      <td style={{ textAlign: 'right', fontWeight: 700, color: stats.wickets > 0 ? '#c084fc' : '#4a6080' }}>
                        {stats.wickets || 0}
                      </td>
                      <td style={{ textAlign: 'right' }}>{stats.matchesInvolved || 0}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
