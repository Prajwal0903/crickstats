// ScorecardModal.jsx — Full match scorecard in a modal
import { X, Star, Divide, MapPin, Shuffle } from 'lucide-react';
import { FRANCHISES } from '../data/franchises';
import { PLAYERS } from '../data/players';
import { VENUES } from '../data/venues';
import TeamBadge from './TeamBadge';

export default function ScorecardModal({ match, batting, bowling, onClose }) {
  if (!match) return null;

  const team1 = FRANCHISES.find(f => f.franchise_id === match.team1_id);
  const team2 = FRANCHISES.find(f => f.franchise_id === match.team2_id);
  const venue = VENUES.find(v => v.venue_id === match.venue_id);
  const mom = PLAYERS.find(p => p.player_id === match.mom_player_id);
  const tossWinner = FRANCHISES.find(f => f.franchise_id === match.toss_winner_id);

  const team1Batting = batting.filter(b => b.team_id === match.team1_id);
  const team2Batting = batting.filter(b => b.team_id === match.team2_id);
  const team1Bowling = bowling.filter(b => b.team_id === match.team1_id);
  const team2Bowling = bowling.filter(b => b.team_id === match.team2_id);

  const getPlayer = (id) => PLAYERS.find(p => p.player_id === id);

  const BattingTable = ({ perfs, label }) => (
    <div style={{ marginBottom: 24 }}>
      <div style={{ fontSize: 13, fontWeight: 700, color: '#8ba3c7', marginBottom: 10, textTransform: 'uppercase', letterSpacing: 0.8 }}>
        🏏 {label} — Batting
      </div>
      <div style={{ overflowX: 'auto' }}>
        <table className="data-table">
          <thead>
            <tr>
              <th>Batter</th>
              <th style={{ textAlign: 'right' }}>R</th>
              <th style={{ textAlign: 'right' }}>B</th>
              <th style={{ textAlign: 'right' }}>4s</th>
              <th style={{ textAlign: 'right' }}>6s</th>
              <th style={{ textAlign: 'right' }}>SR</th>
              <th>Dismissal</th>
            </tr>
          </thead>
          <tbody>
            {perfs.length === 0 ? (
              <tr><td colSpan={7} style={{ textAlign: 'center', color: '#4a6080' }}>No batting data</td></tr>
            ) : perfs.map((p, i) => {
              const player = getPlayer(p.player_id);
              const sr = p.balls > 0 ? ((p.runs / p.balls) * 100).toFixed(1) : '—';
              return (
                <tr key={i}>
                  <td>
                    <span style={{ fontWeight: 600, color: '#f0f6ff' }}>{player?.name || `Player ${p.player_id}`}</span>
                    {p.dismissal === 'NOT OUT' && <span style={{ color: '#34d399', fontSize: 11, marginLeft: 6 }}>not out</span>}
                  </td>
                  <td style={{ textAlign: 'right', fontWeight: 800, color: p.runs >= 50 ? '#f59e0b' : '#f0f6ff' }}>{p.runs}</td>
                  <td style={{ textAlign: 'right' }}>{p.balls}</td>
                  <td style={{ textAlign: 'right' }}>{p.fours}</td>
                  <td style={{ textAlign: 'right', color: p.sixes > 0 ? '#f59e0b' : 'inherit' }}>{p.sixes}</td>
                  <td style={{ textAlign: 'right', color: parseFloat(sr) >= 150 ? '#34d399' : 'inherit' }}>{sr}</td>
                  <td style={{ fontSize: 12 }}>{p.dismissal === 'NOT OUT' ? <span style={{ color: '#34d399' }}>not out</span> : <span style={{ color: '#6b7280' }}>out</span>}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );

  const BowlingTable = ({ perfs, label }) => (
    <div style={{ marginBottom: 24 }}>
      <div style={{ fontSize: 13, fontWeight: 700, color: '#8ba3c7', marginBottom: 10, textTransform: 'uppercase', letterSpacing: 0.8 }}>
        🎳 {label} — Bowling
      </div>
      <div style={{ overflowX: 'auto' }}>
        <table className="data-table">
          <thead>
            <tr>
              <th>Bowler</th>
              <th style={{ textAlign: 'right' }}>O</th>
              <th style={{ textAlign: 'right' }}>M</th>
              <th style={{ textAlign: 'right' }}>R</th>
              <th style={{ textAlign: 'right' }}>W</th>
              <th style={{ textAlign: 'right' }}>Eco</th>
            </tr>
          </thead>
          <tbody>
            {perfs.length === 0 ? (
              <tr><td colSpan={6} style={{ textAlign: 'center', color: '#4a6080' }}>No bowling data</td></tr>
            ) : perfs.map((p, i) => {
              const player = getPlayer(p.player_id);
              const eco = p.overs > 0 ? (p.runs_conceded / p.overs).toFixed(2) : '—';
              return (
                <tr key={i}>
                  <td style={{ fontWeight: 600, color: '#f0f6ff' }}>{player?.name || `Player ${p.player_id}`}</td>
                  <td style={{ textAlign: 'right' }}>{p.overs}</td>
                  <td style={{ textAlign: 'right' }}>{p.maidens}</td>
                  <td style={{ textAlign: 'right' }}>{p.runs_conceded}</td>
                  <td style={{ textAlign: 'right', fontWeight: 800, color: p.wickets >= 3 ? '#f59e0b' : '#f0f6ff' }}>{p.wickets}</td>
                  <td style={{ textAlign: 'right', color: parseFloat(eco) <= 7 ? '#34d399' : parseFloat(eco) >= 11 ? '#ef4444' : 'inherit' }}>{eco}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 200,
      background: 'rgba(0,0,0,0.7)',
      backdropFilter: 'blur(8px)',
      display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
      padding: '20px', overflowY: 'auto'
    }} onClick={onClose}>
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: '100%', maxWidth: 860,
          background: '#0f172a',
          border: '1px solid #1e2d4a',
          borderRadius: 20,
          overflow: 'hidden',
          marginTop: 20,
          animation: 'fadeInUp 0.3s ease',
        }}
      >
        {/* Modal header */}
        <div style={{ padding: '20px 24px', borderBottom: '1px solid #1e2d4a', background: 'rgba(0,0,0,0.3)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <div>
              <div style={{ fontSize: 12, color: '#4a6080', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.8 }}>
                Match {match.match_no} • Full Scorecard
              </div>
              <div style={{ fontSize: 20, fontWeight: 800, marginTop: 4 }}>
                {team1?.name} vs {team2?.name}
              </div>
            </div>
            <button onClick={onClose} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid #1e2d4a', borderRadius: 8, padding: 8, cursor: 'pointer', color: '#8ba3c7' }}>
              <X size={18} />
            </button>
          </div>

          {/* Team scores */}
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            {[
              { team: team1, score: match.team1_score, id: match.team1_id },
              { team: team2, score: match.team2_score, id: match.team2_id },
            ].map(({ team, score, id }) => (
              <div key={id} style={{
                flex: 1, minWidth: 200, display: 'flex', alignItems: 'center', gap: 12,
                padding: '12px 16px', borderRadius: 12,
                background: match.winner_id === id ? 'rgba(16, 185, 129, 0.08)' : 'rgba(0,0,0,0.2)',
                border: `1px solid ${match.winner_id === id ? 'rgba(16,185,129,0.2)' : '#1e2d4a'}`,
              }}>
                <TeamBadge franchiseId={id} size="lg" />
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15 }}>{team?.name}</div>
                  <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 22, fontWeight: 900, color: '#f59e0b', lineHeight: 1.1 }}>
                    {score || '—'}
                  </div>
                </div>
                {match.winner_id === id && <span style={{ fontSize: 20, marginLeft: 'auto' }}>🏆</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Match info */}
        <div style={{ padding: '16px 24px', borderBottom: '1px solid #1e2d4a', display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: 11, color: '#4a6080', fontWeight: 600, marginBottom: 3 }}>RESULT</div>
            <div style={{ fontSize: 14, color: '#34d399', fontWeight: 700 }}>
              {FRANCHISES.find(f => f.franchise_id === match.winner_id)?.abbr} won by {match.win_margin}
            </div>
          </div>
          <div>
            <div style={{ fontSize: 11, color: '#4a6080', fontWeight: 600, marginBottom: 3 }}>TOSS</div>
            <div style={{ fontSize: 14, color: '#8ba3c7' }}>
              {tossWinner?.abbr} elected to {match.toss_decision?.toLowerCase()}
            </div>
          </div>
          <div>
            <div style={{ fontSize: 11, color: '#4a6080', fontWeight: 600, marginBottom: 3 }}>VENUE</div>
            <div style={{ fontSize: 14, color: '#8ba3c7' }}>{venue?.name}</div>
          </div>
          {mom && (
            <div>
              <div style={{ fontSize: 11, color: '#4a6080', fontWeight: 600, marginBottom: 3 }}>PLAYER OF THE MATCH</div>
              <div style={{ fontSize: 14, color: '#f59e0b', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 5 }}>
                <Star size={13} /> {mom.name}
              </div>
            </div>
          )}
        </div>

        {/* Scorecards */}
        <div style={{ padding: '24px' }}>
          <BattingTable perfs={team1Batting} label={team1?.abbr} />
          <BowlingTable perfs={team2Bowling} label={team2?.abbr} />
          <BattingTable perfs={team2Batting} label={team2?.abbr} />
          <BowlingTable perfs={team1Bowling} label={team1?.abbr} />
        </div>
      </div>
    </div>
  );
}
