// MatchesView.jsx — Public matches & scorecards tab
import { useState, useEffect } from 'react';
import { Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { getAllMatches, getBattingForMatch, getBowlingForMatch } from '../data/db';
import { FRANCHISES } from '../data/franchises';
import MatchCard from './MatchCard';
import ScorecardModal from './ScorecardModal';

const PAGE_SIZE = 10;

export default function MatchesView() {
  const [matches, setMatches] = useState([]);
  const [filteredMatches, setFilteredMatches] = useState([]);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [modalData, setModalData] = useState({ batting: [], bowling: [] });
  const [search, setSearch] = useState('');
  const [teamFilter, setTeamFilter] = useState('all');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const m = getAllMatches();
    setMatches(m);
    setFilteredMatches(m);
  }, []);

  useEffect(() => {
    let filtered = matches;
    if (teamFilter !== 'all') {
      const fid = parseInt(teamFilter);
      filtered = filtered.filter(m => m.team1_id === fid || m.team2_id === fid);
    }
    if (search.trim()) {
      const s = search.toLowerCase();
      filtered = filtered.filter(m => {
        const t1 = FRANCHISES.find(f => f.franchise_id === m.team1_id);
        const t2 = FRANCHISES.find(f => f.franchise_id === m.team2_id);
        return t1?.name.toLowerCase().includes(s) || t2?.name.toLowerCase().includes(s) ||
          t1?.abbr.toLowerCase().includes(s) || t2?.abbr.toLowerCase().includes(s) ||
          String(m.match_no).includes(s);
      });
    }
    setFilteredMatches(filtered);
    setPage(1);
  }, [search, teamFilter, matches]);

  const openMatch = (match) => {
    setSelectedMatch(match);
    setModalData({
      batting: getBattingForMatch(match.match_no),
      bowling: getBowlingForMatch(match.match_no),
    });
  };

  const totalPages = Math.ceil(filteredMatches.length / PAGE_SIZE);
  const paginated = filteredMatches.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      {/* Hero stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16, marginBottom: 32 }}>
        {[
          { label: 'Total Matches', value: matches.length, color: '#f59e0b' },
          { label: 'Completed', value: matches.filter(m => m.status === 'COMPLETED').length, color: '#34d399' },
          { label: 'Teams', value: 10, color: '#60a5fa' },
          { label: 'Season', value: '2024', color: '#c084fc' },
        ].map(stat => (
          <div key={stat.label} className="glass-card" style={{ padding: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: 32, fontWeight: 900, color: stat.color, fontFamily: 'Rajdhani, sans-serif', lineHeight: 1 }}>
              {stat.value}
            </div>
            <div style={{ fontSize: 12, color: '#4a6080', fontWeight: 600, marginTop: 6, textTransform: 'uppercase', letterSpacing: 0.6 }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 200, position: 'relative' }}>
          <Search size={15} color="#4a6080" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)' }} />
          <input
            className="form-input"
            style={{ paddingLeft: 36 }}
            placeholder="Search teams or match number..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <select
          className="form-input"
          style={{ width: 180 }}
          value={teamFilter}
          onChange={e => setTeamFilter(e.target.value)}
        >
          <option value="all">All Teams</option>
          {FRANCHISES.map(f => (
            <option key={f.franchise_id} value={f.franchise_id}>{f.name}</option>
          ))}
        </select>
      </div>

      {/* Match list */}
      <div>
        {paginated.length === 0 ? (
          <div className="glass-card" style={{ padding: 40, textAlign: 'center', color: '#4a6080' }}>
            No matches found.
          </div>
        ) : (
          paginated.map(match => (
            <MatchCard key={match.match_no} match={match} onClick={openMatch} />
          ))
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12, marginTop: 24 }}>
          <button
            className="btn-ghost"
            style={{ padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 6 }}
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            <ChevronLeft size={15} /> Prev
          </button>
          <span style={{ color: '#8ba3c7', fontSize: 14 }}>Page {page} of {totalPages}</span>
          <button
            className="btn-ghost"
            style={{ padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 6 }}
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
          >
            Next <ChevronRight size={15} />
          </button>
        </div>
      )}

      {/* Scorecard Modal */}
      {selectedMatch && (
        <ScorecardModal
          match={selectedMatch}
          batting={modalData.batting}
          bowling={modalData.bowling}
          onClose={() => setSelectedMatch(null)}
        />
      )}
    </div>
  );
}
