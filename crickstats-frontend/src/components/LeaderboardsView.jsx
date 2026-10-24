// LeaderboardsView.jsx — Orange Cap & Purple Cap leaderboards
import { useState, useEffect } from 'react';
import { getOrangeCap, getPurpleCap } from '../data/db';
import { PLAYERS } from '../data/players';
import { FRANCHISES } from '../data/franchises';
import TeamBadge from './TeamBadge';

export default function LeaderboardsView() {
  const [orangeCap, setOrangeCap] = useState([]);
  const [purpleCap, setPurpleCap] = useState([]);
  const [activeLeader, setActiveLeader] = useState('orange');

  useEffect(() => {
    setOrangeCap(getOrangeCap());
    setPurpleCap(getPurpleCap());
  }, []);

  const getPlayer = (id) => PLAYERS.find(p => p.player_id === id);
  const getFranchise = (id) => FRANCHISES.find(f => f.franchise_id === id);

  const RankIcon = ({ rank }) => {
    if (rank === 1) return <span style={{ fontSize: 20 }}>🥇</span>;
    if (rank === 2) return <span style={{ fontSize: 20 }}>🥈</span>;
    if (rank === 3) return <span style={{ fontSize: 20 }}>🥉</span>;
    return (
      <div className={`rank-number rank-n`} style={{ minWidth: 28 }}>{rank}</div>
    );
  };

  const OrangeCapRow = ({ data, rank }) => {
    const player = getPlayer(data.player_id);
    const franchise = getFranchise(data.franchise_id);
    const avg = data.innings > 0 ? (data.runs / data.innings).toFixed(1) : '—';
    const isLeader = rank === 1;

    return (
      <div style={{
        display: 'flex', alignItems: 'center', gap: 16,
        padding: '16px 20px',
        background: isLeader ? 'rgba(245, 158, 11, 0.08)' : 'transparent',
        borderBottom: '1px solid rgba(30, 45, 74, 0.5)',
        transition: 'background 0.2s ease',
      }}
      className="glass-card-hover"
      >
        <RankIcon rank={rank} />
        <TeamBadge franchiseId={data.franchise_id} size="md" />
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700, color: '#f0f6ff', fontSize: 15 }}>
            {player?.name || 'Unknown Player'}
          </div>
          <div style={{ fontSize: 12, color: '#4a6080', marginTop: 2 }}>
            {franchise?.abbr} • {player?.role} • {data.innings} innings
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{
            fontFamily: 'Rajdhani, sans-serif',
            fontSize: isLeader ? 32 : 26,
            fontWeight: 900,
            color: isLeader ? '#f59e0b' : '#fbbf24',
            lineHeight: 1,
          }}>
            {data.runs}
          </div>
          <div style={{ fontSize: 11, color: '#4a6080', marginTop: 2 }}>
            runs · HS {data.highest} · Avg {avg}
          </div>
        </div>
        {isLeader && (
          <div style={{ fontSize: 24 }}>🍊</div>
        )}
      </div>
    );
  };

  const PurpleCapRow = ({ data, rank }) => {
    const player = getPlayer(data.player_id);
    const franchise = getFranchise(data.franchise_id);
    const eco = data.overs > 0 ? (data.runs / data.overs).toFixed(2) : '—';
    const avg = data.wickets > 0 ? (data.runs / data.wickets).toFixed(1) : '—';
    const isLeader = rank === 1;

    return (
      <div style={{
        display: 'flex', alignItems: 'center', gap: 16,
        padding: '16px 20px',
        background: isLeader ? 'rgba(168, 85, 247, 0.08)' : 'transparent',
        borderBottom: '1px solid rgba(30, 45, 74, 0.5)',
      }}>
        <RankIcon rank={rank} />
        <TeamBadge franchiseId={data.franchise_id} size="md" />
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700, color: '#f0f6ff', fontSize: 15 }}>
            {player?.name || 'Unknown Player'}
          </div>
          <div style={{ fontSize: 12, color: '#4a6080', marginTop: 2 }}>
            {franchise?.abbr} • {player?.role} • Eco: {eco} · Avg: {avg}
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{
            fontFamily: 'Rajdhani, sans-serif',
            fontSize: isLeader ? 32 : 26,
            fontWeight: 900,
            color: isLeader ? '#c084fc' : '#a855f7',
            lineHeight: 1,
          }}>
            {data.wickets}
          </div>
          <div style={{ fontSize: 11, color: '#4a6080', marginTop: 2 }}>
            wickets · {data.overs} overs bowled
          </div>
        </div>
        {isLeader && (
          <div style={{ fontSize: 24 }}>💜</div>
        )}
      </div>
    );
  };

  return (
    <div>
      <div className="section-title" style={{ marginBottom: 24 }}>
        <span>🏆</span> IPL 2024 Award Races
      </div>

      {/* Cap selector tabs */}
      <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
        <button
          onClick={() => setActiveLeader('orange')}
          style={{
            flex: 1, padding: '16px 24px', borderRadius: 14, cursor: 'pointer', border: '2px solid',
            borderColor: activeLeader === 'orange' ? '#f59e0b' : '#1e2d4a',
            background: activeLeader === 'orange' ? 'rgba(245,158,11,0.1)' : 'rgba(0,0,0,0.3)',
            color: activeLeader === 'orange' ? '#f59e0b' : '#8ba3c7',
            transition: 'all 0.2s ease',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
          }}
        >
          <span style={{ fontSize: 24 }}>🍊</span>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontWeight: 800, fontSize: 15 }}>Orange Cap</div>
            <div style={{ fontSize: 12, opacity: 0.7 }}>Top Run-Scorers</div>
          </div>
        </button>
        <button
          onClick={() => setActiveLeader('purple')}
          style={{
            flex: 1, padding: '16px 24px', borderRadius: 14, cursor: 'pointer', border: '2px solid',
            borderColor: activeLeader === 'purple' ? '#a855f7' : '#1e2d4a',
            background: activeLeader === 'purple' ? 'rgba(168,85,247,0.1)' : 'rgba(0,0,0,0.3)',
            color: activeLeader === 'purple' ? '#c084fc' : '#8ba3c7',
            transition: 'all 0.2s ease',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
          }}
        >
          <span style={{ fontSize: 24 }}>💜</span>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontWeight: 800, fontSize: 15 }}>Purple Cap</div>
            <div style={{ fontSize: 12, opacity: 0.7 }}>Top Wicket-Takers</div>
          </div>
        </button>
      </div>

      {/* Leader hero card */}
      {activeLeader === 'orange' && orangeCap[0] && (() => {
        const p = getPlayer(orangeCap[0].player_id);
        const f = getFranchise(orangeCap[0].franchise_id);
        return (
          <div style={{
            background: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(251,191,36,0.05))',
            border: '1px solid rgba(245,158,11,0.3)', borderRadius: 16, padding: '24px',
            marginBottom: 24, display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap',
          }}>
            <div style={{ fontSize: 48 }}>🍊</div>
            <TeamBadge franchiseId={orangeCap[0].franchise_id} size="xl" />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, color: '#f59e0b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 4 }}>
                Orange Cap Leader
              </div>
              <div style={{ fontSize: 22, fontWeight: 900, color: '#f0f6ff' }}>{p?.name}</div>
              <div style={{ fontSize: 14, color: '#8ba3c7', marginTop: 2 }}>{f?.name} • {p?.role}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 56, fontWeight: 900, color: '#f59e0b', lineHeight: 1 }}>
                {orangeCap[0].runs}
              </div>
              <div style={{ fontSize: 13, color: '#8ba3c7' }}>runs in {orangeCap[0].innings} innings</div>
            </div>
          </div>
        );
      })()}

      {activeLeader === 'purple' && purpleCap[0] && (() => {
        const p = getPlayer(purpleCap[0].player_id);
        const f = getFranchise(purpleCap[0].franchise_id);
        return (
          <div style={{
            background: 'linear-gradient(135deg, rgba(168,85,247,0.15), rgba(192,132,252,0.05))',
            border: '1px solid rgba(168,85,247,0.3)', borderRadius: 16, padding: '24px',
            marginBottom: 24, display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap',
          }}>
            <div style={{ fontSize: 48 }}>💜</div>
            <TeamBadge franchiseId={purpleCap[0].franchise_id} size="xl" />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, color: '#c084fc', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 4 }}>
                Purple Cap Leader
              </div>
              <div style={{ fontSize: 22, fontWeight: 900, color: '#f0f6ff' }}>{p?.name}</div>
              <div style={{ fontSize: 14, color: '#8ba3c7', marginTop: 2 }}>{f?.name} • {p?.role}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 56, fontWeight: 900, color: '#c084fc', lineHeight: 1 }}>
                {purpleCap[0].wickets}
              </div>
              <div style={{ fontSize: 13, color: '#8ba3c7' }}>wickets in {purpleCap[0].innings} innings</div>
            </div>
          </div>
        );
      })()}

      {/* Full leaderboard */}
      <div className="glass-card" style={{ overflow: 'hidden' }}>
        {activeLeader === 'orange'
          ? orangeCap.map((d, i) => <OrangeCapRow key={d.player_id} data={d} rank={i + 1} />)
          : purpleCap.map((d, i) => <PurpleCapRow key={d.player_id} data={d} rank={i + 1} />)
        }
        {(activeLeader === 'orange' ? orangeCap : purpleCap).length === 0 && (
          <div style={{ padding: 40, textAlign: 'center', color: '#4a6080' }}>No data available.</div>
        )}
      </div>
    </div>
  );
}
