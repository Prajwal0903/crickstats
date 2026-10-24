// AdminView.jsx — Full admin portal: Auto-Sim, Manual Entry, CRUD
import { useState, useEffect } from 'react';
import {
  Zap, Plus, Edit, Database, AlertCircle, CheckCircle,
  ChevronDown, Loader, Eye, Save, X, RefreshCw
} from 'lucide-react';
import {
  peekNextStagingMatch, commitNextStagingMatch, addMatch,
  addBattingPerformance, addBowlingPerformance, updatePlayer,
  getDB, getAllMatches, resetDB
} from '../data/db';
import { FRANCHISES } from '../data/franchises';
import { PLAYERS } from '../data/players';
import { VENUES } from '../data/venues';
import TeamBadge from './TeamBadge';

function Toast({ msg, type, onClose }) {
  const colors = {
    success: { bg: 'rgba(16,185,129,0.15)', border: 'rgba(16,185,129,0.3)', color: '#34d399', icon: <CheckCircle size={16} /> },
    error: { bg: 'rgba(239,68,68,0.15)', border: 'rgba(239,68,68,0.3)', color: '#f87171', icon: <AlertCircle size={16} /> },
    info: { bg: 'rgba(59,130,246,0.15)', border: 'rgba(59,130,246,0.3)', color: '#60a5fa', icon: <AlertCircle size={16} /> },
  };
  const c = colors[type] || colors.info;
  return (
    <div className="toast" style={{
      position: 'fixed', top: 20, right: 20, zIndex: 300,
      background: c.bg, border: `1px solid ${c.border}`, borderRadius: 12,
      padding: '14px 20px', color: c.color, fontWeight: 600, fontSize: 14,
      display: 'flex', alignItems: 'center', gap: 10,
      maxWidth: 380, backdropFilter: 'blur(20px)',
      boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
    }}>
      {c.icon} {msg}
      <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: c.color, marginLeft: 'auto' }}>
        <X size={14} />
      </button>
    </div>
  );
}

export default function AdminView({ onDataChange }) {
  const [activeSection, setActiveSection] = useState('autosim');
  const [toast, setToast] = useState(null);
  const [previewMatch, setPreviewMatch] = useState(null);
  const [committing, setCommitting] = useState(false);
  const [matchCount, setMatchCount] = useState(0);

  // Manual entry state
  const [manualForm, setManualForm] = useState({
    team1_id: '', team2_id: '', venue_id: '',
    match_date: '', toss_winner_id: '', toss_decision: 'BAT',
    winner_id: '', win_margin: '', mom_player_id: '',
    team1_score: '', team2_score: '',
  });

  // Batting entry rows
  const [battingRows, setBattingRows] = useState([
    { player_id: '', team_id: '', innings: 1, runs: '', balls: '', fours: '', sixes: '', dismissal: 'OUT' }
  ]);

  // Bowling entry rows
  const [bowlingRows, setBowlingRows] = useState([
    { player_id: '', team_id: '', innings: 1, overs: '', maidens: 0, runs_conceded: '', wickets: '' }
  ]);

  // Player edit state
  const [editPlayer, setEditPlayer] = useState(null);
  const [editForm, setEditForm] = useState({});

  useEffect(() => {
    const peek = peekNextStagingMatch();
    setPreviewMatch(peek);
    setMatchCount(getAllMatches().length);
  }, []);

  const showToast = (msg, type = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 4000);
  };

  const handleAutoCommit = async () => {
    if (!previewMatch) return;
    setCommitting(true);
    await new Promise(r => setTimeout(r, 1200)); // Simulate DB insert delay
    const result = commitNextStagingMatch();
    if (result.success) {
      showToast(`✅ Match ${result.match.match_no} committed to DB!`, 'success');
      setPreviewMatch(peekNextStagingMatch());
      setMatchCount(getAllMatches().length);
      onDataChange && onDataChange();
    } else {
      showToast(result.message, 'error');
    }
    setCommitting(false);
  };

  const handleManualSubmit = (e) => {
    e.preventDefault();
    const { team1_id, team2_id, venue_id, match_date, winner_id, win_margin, mom_player_id, toss_winner_id, toss_decision, team1_score, team2_score } = manualForm;
    if (!team1_id || !team2_id || !venue_id || !winner_id) {
      showToast('Please fill all required fields.', 'error'); return;
    }
    const match_no = addMatch({
      team1_id: +team1_id, team2_id: +team2_id, venue_id: +venue_id,
      match_date, toss_winner_id: +toss_winner_id, toss_decision,
      winner_id: +winner_id, win_margin, mom_player_id: +mom_player_id,
      team1_score, team2_score, match_type: 'LEAGUE',
    });
    battingRows.forEach(r => {
      if (r.player_id && r.runs !== '') {
        const p = PLAYERS.find(pl => pl.player_id === +r.player_id);
        addBattingPerformance({ ...r, player_id: +r.player_id, team_id: +r.team_id, franchise_id: p?.franchise_id || 0, runs: +r.runs, balls: +r.balls, fours: +r.fours, sixes: +r.sixes, match_no });
      }
    });
    bowlingRows.forEach(r => {
      if (r.player_id && r.wickets !== '') {
        const p = PLAYERS.find(pl => pl.player_id === +r.player_id);
        addBowlingPerformance({ ...r, player_id: +r.player_id, team_id: +r.team_id, franchise_id: p?.franchise_id || 0, overs: +r.overs, maidens: +r.maidens, runs_conceded: +r.runs_conceded, wickets: +r.wickets, match_no });
      }
    });
    showToast(`Match ${match_no} added successfully!`, 'success');
    setMatchCount(getAllMatches().length);
    onDataChange && onDataChange();
    // Reset form
    setManualForm({ team1_id: '', team2_id: '', venue_id: '', match_date: '', toss_winner_id: '', toss_decision: 'BAT', winner_id: '', win_margin: '', mom_player_id: '', team1_score: '', team2_score: '' });
    setBattingRows([{ player_id: '', team_id: '', innings: 1, runs: '', balls: '', fours: '', sixes: '', dismissal: 'OUT' }]);
    setBowlingRows([{ player_id: '', team_id: '', innings: 1, overs: '', maidens: 0, runs_conceded: '', wickets: '' }]);
  };

  const StagingPreview = ({ peek }) => {
    if (!peek) return (
      <div style={{ padding: 40, textAlign: 'center', color: '#4a6080' }}>
        <Database size={40} style={{ margin: '0 auto 12px', display: 'block' }} />
        <div style={{ fontWeight: 600, fontSize: 15 }}>All staging matches committed!</div>
        <div style={{ fontSize: 13, marginTop: 6 }}>No more matches in the staging store.</div>
      </div>
    );
    const { match } = peek;
    const t1 = FRANCHISES.find(f => f.franchise_id === match.team1_id);
    const t2 = FRANCHISES.find(f => f.franchise_id === match.team2_id);
    const winner = FRANCHISES.find(f => f.franchise_id === match.winner_id);
    return (
      <div style={{ padding: '20px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <TeamBadge franchiseId={match.team1_id} size="lg" />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 16, fontWeight: 800 }}>{t1?.name}</div>
            <div style={{ fontSize: 13, color: '#8ba3c7' }}>{match.team1_score}</div>
          </div>
          <div style={{ fontSize: 13, color: '#4a6080', fontWeight: 700 }}>vs</div>
          <div style={{ flex: 1, textAlign: 'right' }}>
            <div style={{ fontSize: 16, fontWeight: 800 }}>{t2?.name}</div>
            <div style={{ fontSize: 13, color: '#8ba3c7' }}>{match.team2_score}</div>
          </div>
          <TeamBadge franchiseId={match.team2_id} size="lg" />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {[
            { label: 'Match No.', value: match.match_no },
            { label: 'Type', value: match.match_type || 'League' },
            { label: 'Date', value: match.date },
            { label: 'Winner', value: winner?.abbr + ' — ' + match.win_margin },
            { label: 'Batting Records', value: match.batting.length },
            { label: 'Bowling Records', value: match.bowling.length },
          ].map(i => (
            <div key={i.label} style={{ background: 'rgba(0,0,0,0.2)', borderRadius: 8, padding: '10px 14px' }}>
              <div style={{ fontSize: 11, color: '#4a6080', fontWeight: 600, textTransform: 'uppercase' }}>{i.label}</div>
              <div style={{ fontSize: 14, color: '#f0f6ff', fontWeight: 600, marginTop: 3 }}>{i.value}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const SECTIONS = [
    { id: 'autosim', label: '⚡ Auto-Sim', desc: 'Auto-fetch & commit staging matches' },
    { id: 'manual', label: '✏️ Manual Entry', desc: 'Add match scorecard manually' },
    { id: 'players', label: '👤 Edit Players', desc: 'Update player profiles & roles' },
  ];

  const playersList = getDB().players.slice(0, 30); // Show first 30 for edit

  return (
    <div>
      {toast && <Toast msg={toast.msg} type={toast.type} onClose={() => setToast(null)} />}

      {/* Admin header */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(168,85,247,0.15), rgba(99,102,241,0.08))',
        border: '1px solid rgba(168,85,247,0.25)',
        borderRadius: 16, padding: '20px 24px', marginBottom: 24,
        display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap',
      }}>
        <div style={{ background: 'rgba(168,85,247,0.2)', borderRadius: 12, padding: 12 }}>
          <Database size={24} color="#c084fc" />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 20, fontWeight: 800, color: '#f0f6ff' }}>Admin Control Panel</div>
          <div style={{ fontSize: 13, color: '#8ba3c7', marginTop: 2 }}>
            {matchCount} matches in DB • {previewMatch ? `Match ${previewMatch.match.match_no} ready in staging` : 'Staging exhausted'}
          </div>
        </div>
        <button
          onClick={() => { resetDB(); setPreviewMatch(peekNextStagingMatch()); setMatchCount(getAllMatches().length); onDataChange && onDataChange(); showToast('Database reset to initial seed!', 'info'); }}
          className="btn-ghost"
          style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13 }}
        >
          <RefreshCw size={14} /> Reset DB
        </button>
      </div>

      {/* Section tabs */}
      <div style={{ display: 'flex', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
        {SECTIONS.map(s => (
          <button
            key={s.id}
            onClick={() => setActiveSection(s.id)}
            style={{
              flex: 1, minWidth: 180, padding: '14px 20px', borderRadius: 12, cursor: 'pointer', border: '1px solid',
              borderColor: activeSection === s.id ? '#c084fc' : '#1e2d4a',
              background: activeSection === s.id ? 'rgba(168,85,247,0.12)' : 'rgba(0,0,0,0.3)',
              color: activeSection === s.id ? '#c084fc' : '#8ba3c7',
              transition: 'all 0.2s ease', textAlign: 'left',
            }}
          >
            <div style={{ fontWeight: 700, fontSize: 14 }}>{s.label}</div>
            <div style={{ fontSize: 12, opacity: 0.7, marginTop: 2 }}>{s.desc}</div>
          </button>
        ))}
      </div>

      {/* ── AUTO-SIM SECTION ── */}
      {activeSection === 'autosim' && (
        <div className="glass-card" style={{ padding: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <Zap size={20} color="#f59e0b" />
            <div>
              <div style={{ fontSize: 18, fontWeight: 800 }}>Auto-Fetch Next Match</div>
              <div style={{ fontSize: 13, color: '#8ba3c7' }}>Pull from staging store and commit to active DB</div>
            </div>
          </div>

          {/* Preview card */}
          <div style={{ background: 'rgba(0,0,0,0.25)', borderRadius: 12, padding: 20, marginBottom: 20, border: '1px solid #1e2d4a' }}>
            <div style={{ fontSize: 12, color: '#4a6080', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 12 }}>
              Next Staging Match Preview
            </div>
            <StagingPreview peek={previewMatch} />
          </div>

          {previewMatch && (
            <button
              className="btn-amber"
              style={{ width: '100%', fontSize: 15, padding: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}
              onClick={handleAutoCommit}
              disabled={committing}
            >
              {committing ? (
                <><Loader size={18} style={{ animation: 'spin 1s linear infinite' }} /> Committing to DB...</>
              ) : (
                <><Zap size={18} /> Confirm & Commit Match {previewMatch?.match?.match_no} to DB</>
              )}
            </button>
          )}
        </div>
      )}

      {/* ── MANUAL ENTRY SECTION ── */}
      {activeSection === 'manual' && (
        <form className="glass-card" style={{ padding: 24 }} onSubmit={handleManualSubmit}>
          <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
            <Plus size={20} color="#f59e0b" /> New Match Entry
          </div>

          {/* Match details grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 24 }}>
            {[
              { label: 'Team 1 *', key: 'team1_id', type: 'franchise' },
              { label: 'Team 2 *', key: 'team2_id', type: 'franchise' },
              { label: 'Venue *', key: 'venue_id', type: 'venue' },
              { label: 'Match Date', key: 'match_date', type: 'date' },
              { label: 'Toss Winner', key: 'toss_winner_id', type: 'franchise' },
              { label: 'Toss Decision', key: 'toss_decision', type: 'select', options: ['BAT', 'FIELD', 'BOWL'] },
              { label: 'Winner *', key: 'winner_id', type: 'franchise' },
              { label: 'Win Margin *', key: 'win_margin', type: 'text', placeholder: 'e.g. 5 wickets' },
              { label: 'Player of Match', key: 'mom_player_id', type: 'player' },
              { label: 'Team 1 Score', key: 'team1_score', type: 'text', placeholder: '185/5' },
              { label: 'Team 2 Score', key: 'team2_score', type: 'text', placeholder: '183/7' },
            ].map(field => (
              <div key={field.key}>
                <label className="form-label">{field.label}</label>
                {field.type === 'franchise' ? (
                  <select className="form-input" value={manualForm[field.key]} onChange={e => setManualForm(f => ({ ...f, [field.key]: e.target.value }))}>
                    <option value="">— Select Team —</option>
                    {FRANCHISES.map(f => <option key={f.franchise_id} value={f.franchise_id}>{f.name}</option>)}
                  </select>
                ) : field.type === 'venue' ? (
                  <select className="form-input" value={manualForm[field.key]} onChange={e => setManualForm(f => ({ ...f, [field.key]: e.target.value }))}>
                    <option value="">— Select Venue —</option>
                    {VENUES.map(v => <option key={v.venue_id} value={v.venue_id}>{v.name}</option>)}
                  </select>
                ) : field.type === 'player' ? (
                  <select className="form-input" value={manualForm[field.key]} onChange={e => setManualForm(f => ({ ...f, [field.key]: e.target.value }))}>
                    <option value="">— Select Player —</option>
                    {PLAYERS.map(p => <option key={p.player_id} value={p.player_id}>{p.name}</option>)}
                  </select>
                ) : field.type === 'select' ? (
                  <select className="form-input" value={manualForm[field.key]} onChange={e => setManualForm(f => ({ ...f, [field.key]: e.target.value }))}>
                    {field.options.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                ) : field.type === 'date' ? (
                  <input className="form-input" type="date" value={manualForm[field.key]} onChange={e => setManualForm(f => ({ ...f, [field.key]: e.target.value }))} />
                ) : (
                  <input className="form-input" type="text" placeholder={field.placeholder || ''} value={manualForm[field.key]} onChange={e => setManualForm(f => ({ ...f, [field.key]: e.target.value }))} />
                )}
              </div>
            ))}
          </div>

          {/* Batting performances */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
              <div style={{ fontSize: 15, fontWeight: 700 }}>🏏 Batting Performances</div>
              <button type="button" className="btn-ghost" style={{ fontSize: 12, padding: '6px 12px' }}
                onClick={() => setBattingRows(r => [...r, { player_id: '', team_id: '', innings: 1, runs: '', balls: '', fours: '', sixes: '', dismissal: 'OUT' }])}>
                + Add Row
              </button>
            </div>
            {battingRows.map((row, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: 8, marginBottom: 8, alignItems: 'end' }}>
                <div>
                  <label className="form-label">Player</label>
                  <select className="form-input" value={row.player_id} onChange={e => { const r=[...battingRows]; r[i].player_id=e.target.value; setBattingRows(r); }}>
                    <option value="">— Player —</option>
                    {PLAYERS.map(p => <option key={p.player_id} value={p.player_id}>{p.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="form-label">Team</label>
                  <select className="form-input" value={row.team_id} onChange={e => { const r=[...battingRows]; r[i].team_id=e.target.value; setBattingRows(r); }}>
                    <option value="">Team</option>
                    {FRANCHISES.map(f => <option key={f.franchise_id} value={f.franchise_id}>{f.abbr}</option>)}
                  </select>
                </div>
                {['runs','balls','fours','sixes'].map(key => (
                  <div key={key}>
                    <label className="form-label">{key.charAt(0).toUpperCase()+key.slice(1)}</label>
                    <input className="form-input" type="number" min="0" value={row[key]} onChange={e => { const r=[...battingRows]; r[i][key]=e.target.value; setBattingRows(r); }} placeholder="0" />
                  </div>
                ))}
                <div>
                  <label className="form-label">Status</label>
                  <select className="form-input" value={row.dismissal} onChange={e => { const r=[...battingRows]; r[i].dismissal=e.target.value; setBattingRows(r); }}>
                    <option>OUT</option><option>NOT OUT</option>
                  </select>
                </div>
                <button type="button" onClick={() => setBattingRows(r => r.filter((_, j) => j !== i))}
                  style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)', color: '#f87171', borderRadius: 8, padding: '10px 10px', cursor: 'pointer', alignSelf: 'flex-end' }}>
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>

          {/* Bowling performances */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
              <div style={{ fontSize: 15, fontWeight: 700 }}>🎳 Bowling Performances</div>
              <button type="button" className="btn-ghost" style={{ fontSize: 12, padding: '6px 12px' }}
                onClick={() => setBowlingRows(r => [...r, { player_id: '', team_id: '', innings: 1, overs: '', maidens: 0, runs_conceded: '', wickets: '' }])}>
                + Add Row
              </button>
            </div>
            {bowlingRows.map((row, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: 8, marginBottom: 8, alignItems: 'end' }}>
                <div>
                  <label className="form-label">Bowler</label>
                  <select className="form-input" value={row.player_id} onChange={e => { const r=[...bowlingRows]; r[i].player_id=e.target.value; setBowlingRows(r); }}>
                    <option value="">— Player —</option>
                    {PLAYERS.map(p => <option key={p.player_id} value={p.player_id}>{p.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="form-label">Team</label>
                  <select className="form-input" value={row.team_id} onChange={e => { const r=[...bowlingRows]; r[i].team_id=e.target.value; setBowlingRows(r); }}>
                    <option value="">Team</option>
                    {FRANCHISES.map(f => <option key={f.franchise_id} value={f.franchise_id}>{f.abbr}</option>)}
                  </select>
                </div>
                {['overs','maidens','runs_conceded','wickets'].map(key => (
                  <div key={key}>
                    <label className="form-label">{key.replace('_',' ')}</label>
                    <input className="form-input" type="number" min="0" value={row[key]} onChange={e => { const r=[...bowlingRows]; r[i][key]=e.target.value; setBowlingRows(r); }} placeholder="0" />
                  </div>
                ))}
                <button type="button" onClick={() => setBowlingRows(r => r.filter((_, j) => j !== i))}
                  style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)', color: '#f87171', borderRadius: 8, padding: '10px 10px', cursor: 'pointer', alignSelf: 'flex-end' }}>
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>

          <button type="submit" className="btn-amber" style={{ width: '100%', fontSize: 15, padding: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <Save size={18} /> Save Match to Database
          </button>
        </form>
      )}

      {/* ── PLAYER EDIT SECTION ── */}
      {activeSection === 'players' && (
        <div className="glass-card" style={{ overflow: 'hidden' }}>
          <div style={{ padding: '16px 20px', borderBottom: '1px solid #1e2d4a', fontSize: 15, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8 }}>
            <Edit size={16} color="#f59e0b" /> Edit Player Profiles (first 30 shown)
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>Player</th>
                <th>Team</th>
                <th>Role</th>
                <th>Nationality</th>
                <th style={{ textAlign: 'right', paddingRight: 20 }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {playersList.map(player => (
                <tr key={player.player_id}>
                  <td style={{ fontWeight: 600 }}>{player.name}</td>
                  <td>{FRANCHISES.find(f => f.franchise_id === player.franchise_id)?.abbr}</td>
                  <td>{player.role}</td>
                  <td>{player.nationality}</td>
                  <td style={{ textAlign: 'right', paddingRight: 16 }}>
                    <button
                      onClick={() => { setEditPlayer(player); setEditForm({ name: player.name, role: player.role, nationality: player.nationality, bat_style: player.bat_style, bowl_style: player.bowl_style }); }}
                      style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.25)', color: '#f59e0b', borderRadius: 6, padding: '5px 12px', cursor: 'pointer', fontSize: 12, fontWeight: 600 }}>
                      <Edit size={12} style={{ display: 'inline', marginRight: 4 }} /> Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Edit Modal */}
          {editPlayer && (
            <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}
              onClick={() => setEditPlayer(null)}>
              <div style={{ background: '#0f172a', border: '1px solid #1e2d4a', borderRadius: 16, padding: 28, width: '100%', maxWidth: 480 }}
                onClick={e => e.stopPropagation()}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                  <div style={{ fontSize: 17, fontWeight: 800 }}>Edit: {editPlayer.name}</div>
                  <button onClick={() => setEditPlayer(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#8ba3c7' }}><X size={18} /></button>
                </div>
                {[
                  { label: 'Name', key: 'name', type: 'text' },
                  { label: 'Role', key: 'role', type: 'select', options: ['Batsman','Bowler','All-Rounder','WK-Batsman'] },
                  { label: 'Nationality', key: 'nationality', type: 'text' },
                  { label: 'Batting Style', key: 'bat_style', type: 'text' },
                  { label: 'Bowling Style', key: 'bowl_style', type: 'text' },
                ].map(f => (
                  <div key={f.key} style={{ marginBottom: 14 }}>
                    <label className="form-label">{f.label}</label>
                    {f.type === 'select' ? (
                      <select className="form-input" value={editForm[f.key] || ''} onChange={e => setEditForm(ef => ({ ...ef, [f.key]: e.target.value }))}>
                        {f.options.map(o => <option key={o} value={o}>{o}</option>)}
                      </select>
                    ) : (
                      <input className="form-input" type="text" value={editForm[f.key] || ''} onChange={e => setEditForm(ef => ({ ...ef, [f.key]: e.target.value }))} />
                    )}
                  </div>
                ))}
                <button className="btn-amber" style={{ width: '100%', marginTop: 8 }} onClick={() => {
                  updatePlayer(editPlayer.player_id, editForm);
                  showToast(`${editForm.name} updated successfully!`, 'success');
                  setEditPlayer(null);
                  onDataChange && onDataChange();
                }}>
                  <Save size={15} style={{ display: 'inline', marginRight: 6 }} /> Save Changes
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
