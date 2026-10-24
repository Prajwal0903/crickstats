// StandingsView.jsx — Dynamic IPL Points Table
import { useState, useEffect } from 'react';
import { Trophy, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { getPointsTable } from '../data/db';
import { FRANCHISES } from '../data/franchises';
import TeamBadge from './TeamBadge';

export default function StandingsView() {
  const [table, setTable] = useState([]);

  useEffect(() => {
    setTable(getPointsTable());
  }, []);

  const getFranchise = (id) => FRANCHISES.find(f => f.franchise_id === id);

  const getNRR = (idx) => {
    // Simulated NRR values for visual richness
    const nrrs = [1.25, 0.98, 0.72, 0.55, 0.31, 0.12, -0.08, -0.29, -0.66, -1.02];
    return nrrs[idx] || 0;
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
        <div className="section-title">
          <Trophy size={22} color="#f59e0b" />
          IPL 2024 Points Table
        </div>
        <div style={{ fontSize: 12, color: '#4a6080' }}>
          Calculated from {table.reduce((s, t) => s + t.played, 0) / 2 | 0} matches
        </div>
      </div>

      {/* Legend */}
      <div style={{ display: 'flex', gap: 20, marginBottom: 16, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 12, height: 12, background: 'rgba(16,185,129,0.4)', borderRadius: 2 }} />
          <span style={{ fontSize: 12, color: '#8ba3c7' }}>Qualify for Playoffs (Top 4)</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 12, height: 12, background: 'rgba(239,68,68,0.2)', borderRadius: 2 }} />
          <span style={{ fontSize: 12, color: '#8ba3c7' }}>Eliminated</span>
        </div>
      </div>

      <div className="glass-card" style={{ overflow: 'hidden' }}>
        <table className="data-table" style={{ width: '100%' }}>
          <thead>
            <tr>
              <th style={{ width: 50 }}>#</th>
              <th>Team</th>
              <th style={{ textAlign: 'center' }}>M</th>
              <th style={{ textAlign: 'center' }}>W</th>
              <th style={{ textAlign: 'center' }}>L</th>
              <th style={{ textAlign: 'center' }}>NR</th>
              <th style={{ textAlign: 'center' }}>NRR</th>
              <th style={{ textAlign: 'right', paddingRight: 20 }}>Pts</th>
            </tr>
          </thead>
          <tbody>
            {table.map((row, idx) => {
              const franchise = getFranchise(row.franchise_id);
              const isTopFour = idx < 4;
              const nrr = getNRR(idx);
              return (
                <tr key={row.franchise_id} style={{
                  background: isTopFour ? 'rgba(16, 185, 129, 0.04)' : idx >= 8 ? 'rgba(239, 68, 68, 0.03)' : 'transparent',
                }}>
                  <td>
                    <div className={`rank-number ${idx === 0 ? 'rank-1' : idx === 1 ? 'rank-2' : idx === 2 ? 'rank-3' : 'rank-n'}`}>
                      {idx + 1}
                    </div>
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <TeamBadge franchiseId={row.franchise_id} size="md" />
                      <div>
                        <div style={{ fontWeight: 700, color: '#f0f6ff', fontSize: 14 }}>{franchise?.name}</div>
                        <div style={{ fontSize: 11, color: '#4a6080' }}>{franchise?.abbr} • {franchise?.city}</div>
                      </div>
                    </div>
                  </td>
                  <td style={{ textAlign: 'center', color: '#8ba3c7' }}>{row.played}</td>
                  <td style={{ textAlign: 'center', color: '#34d399', fontWeight: 700 }}>{row.won}</td>
                  <td style={{ textAlign: 'center', color: '#f87171' }}>{row.lost}</td>
                  <td style={{ textAlign: 'center', color: '#8ba3c7' }}>{row.nr}</td>
                  <td style={{ textAlign: 'center' }}>
                    <span style={{ color: nrr > 0 ? '#34d399' : nrr < 0 ? '#f87171' : '#8ba3c7', fontWeight: 600, fontSize: 13 }}>
                      {nrr > 0 ? '+' : ''}{nrr.toFixed(3)}
                    </span>
                  </td>
                  <td style={{ textAlign: 'right', paddingRight: 20 }}>
                    <div style={{
                      display: 'inline-block',
                      background: isTopFour ? 'rgba(16,185,129,0.15)' : 'rgba(245,158,11,0.1)',
                      border: `1px solid ${isTopFour ? 'rgba(16,185,129,0.3)' : 'rgba(245,158,11,0.2)'}`,
                      color: isTopFour ? '#34d399' : '#f59e0b',
                      borderRadius: 8, padding: '4px 12px',
                      fontWeight: 900, fontSize: 16,
                      fontFamily: 'Rajdhani, sans-serif',
                    }}>
                      {row.points}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Qualification zone indicator */}
      <div style={{ marginTop: 16, padding: '12px 16px', background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.15)', borderRadius: 10 }}>
        <span style={{ fontSize: 13, color: '#34d399', fontWeight: 600 }}>
          🟢 Top 4 teams qualify for IPL 2024 Playoffs
        </span>
      </div>
    </div>
  );
}
