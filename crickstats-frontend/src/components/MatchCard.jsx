// MatchCard.jsx — Compact scorecard card for match list
import { MapPin, Calendar, Star, ChevronRight } from 'lucide-react';
import { FRANCHISES } from '../data/franchises';
import { PLAYERS } from '../data/players';
import { VENUES } from '../data/venues';
import TeamBadge from './TeamBadge';

export default function MatchCard({ match, onClick }) {
  const team1 = FRANCHISES.find(f => f.franchise_id === match.team1_id);
  const team2 = FRANCHISES.find(f => f.franchise_id === match.team2_id);
  const venue = VENUES.find(v => v.venue_id === match.venue_id);
  const mom = PLAYERS.find(p => p.player_id === match.mom_player_id);
  const isWinner1 = match.winner_id === match.team1_id;
  const isWinner2 = match.winner_id === match.team2_id;

  const matchDate = new Date(match.match_date);
  const dateStr = matchDate.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

  return (
    <div
      className="glass-card glass-card-hover fade-in-up"
      onClick={() => onClick && onClick(match)}
      style={{ padding: 20, cursor: onClick ? 'pointer' : 'default', marginBottom: 12 }}
    >
      {/* Header row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: '#4a6080', textTransform: 'uppercase', letterSpacing: 0.6 }}>
            Match {match.match_no}
          </span>
          {match.match_type && match.match_type !== 'LEAGUE' && (
            <span style={{
              background: 'rgba(168, 85, 247, 0.15)',
              border: '1px solid rgba(168, 85, 247, 0.3)',
              color: '#c084fc', fontSize: 10, fontWeight: 700,
              padding: '2px 8px', borderRadius: 20, textTransform: 'uppercase', letterSpacing: 0.5
            }}>{match.match_type}</span>
          )}
        </div>
        <span className="pill-completed">Completed</span>
      </div>

      {/* Teams vs scores */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
        {/* Team 1 */}
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <TeamBadge franchiseId={match.team1_id} size="md" />
            <div>
              <div style={{ fontWeight: 700, fontSize: 14, color: isWinner1 ? '#f0f6ff' : '#8ba3c7' }}>
                {team1?.abbr}
              </div>
              <div style={{ fontSize: 11, color: '#4a6080' }}>{team1?.name.split(' ').slice(-1)[0]}</div>
            </div>
            {isWinner1 && <span style={{ fontSize: 16, marginLeft: 'auto' }}>🏆</span>}
          </div>
          <span className="score-badge">{match.team1_score || '—'}</span>
        </div>

        {/* VS */}
        <div style={{ textAlign: 'center', flexShrink: 0 }}>
          <div style={{ fontSize: 11, fontWeight: 800, color: '#4a6080', letterSpacing: 1 }}>VS</div>
        </div>

        {/* Team 2 */}
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <TeamBadge franchiseId={match.team2_id} size="md" />
            <div>
              <div style={{ fontWeight: 700, fontSize: 14, color: isWinner2 ? '#f0f6ff' : '#8ba3c7' }}>
                {team2?.abbr}
              </div>
              <div style={{ fontSize: 11, color: '#4a6080' }}>{team2?.name.split(' ').slice(-1)[0]}</div>
            </div>
            {isWinner2 && <span style={{ fontSize: 16, marginLeft: 'auto' }}>🏆</span>}
          </div>
          <span className="score-badge">{match.team2_score || '—'}</span>
        </div>

        <ChevronRight size={16} color="#4a6080" style={{ flexShrink: 0 }} />
      </div>

      {/* Result */}
      <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: 8, padding: '8px 12px', marginBottom: 12 }}>
        <span style={{ fontSize: 13, color: '#34d399', fontWeight: 600 }}>
          {FRANCHISES.find(f => f.franchise_id === match.winner_id)?.abbr} won by {match.win_margin}
        </span>
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
        <div style={{ display: 'flex', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <MapPin size={12} color="#4a6080" />
            <span style={{ fontSize: 12, color: '#8ba3c7' }}>{venue?.name || 'Unknown Venue'}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <Calendar size={12} color="#4a6080" />
            <span style={{ fontSize: 12, color: '#8ba3c7' }}>{dateStr}</span>
          </div>
        </div>
        {mom && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <Star size={12} color="#f59e0b" />
            <span style={{ fontSize: 12, color: '#f59e0b', fontWeight: 600 }}>{mom.name}</span>
          </div>
        )}
      </div>
    </div>
  );
}
