// Header.jsx — Sticky top navigation with tab system & Admin/User mode toggle
import { Trophy, Swords, BarChart3, Users, Settings, Shield, Zap, ChevronDown } from 'lucide-react';

const TABS = [
  { id: 'matches',      label: 'Matches',       icon: Swords },
  { id: 'standings',   label: 'Points Table',  icon: Trophy },
  { id: 'leaderboards',label: 'Leaderboards',  icon: BarChart3 },
  { id: 'teams',       label: 'Teams',         icon: Users },
  { id: 'admin',       label: 'Admin Control', icon: Settings, adminOnly: true },
];

export default function Header({ activeTab, setActiveTab, isAdmin, setIsAdmin }) {
  return (
    <header style={{ background: 'rgba(10, 15, 30, 0.95)', backdropFilter: 'blur(20px)', borderBottom: '1px solid #1e2d4a', position: 'sticky', top: 0, zIndex: 100 }}>
      {/* Top bar */}
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          {/* Logo */}
          <button
            onClick={() => setActiveTab('matches')}
            style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <div style={{
              width: 40, height: 40, borderRadius: 10,
              background: 'linear-gradient(135deg, #d97706, #f59e0b)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(245, 158, 11, 0.35)'
            }}>
              <Zap size={20} color="#000" />
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: 20, fontWeight: 900, letterSpacing: '-0.5px' }} className="gradient-text">
                CrickStats
              </div>
              <div style={{ fontSize: 10, color: '#4a6080', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', marginTop: -2 }}>
                IPL 2024 Live
              </div>
            </div>
          </button>

          {/* Mode toggle */}
          <button
            onClick={() => setIsAdmin(!isAdmin)}
            style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '8px 16px', borderRadius: 10, cursor: 'pointer',
              border: '1px solid',
              borderColor: isAdmin ? 'rgba(168, 85, 247, 0.5)' : 'rgba(30, 45, 74, 1)',
              background: isAdmin ? 'rgba(168, 85, 247, 0.1)' : 'rgba(0,0,0,0.3)',
              color: isAdmin ? '#c084fc' : '#8ba3c7',
              fontWeight: 600, fontSize: 13,
              transition: 'all 0.2s ease',
            }}
          >
            {isAdmin ? <Shield size={15} /> : <Users size={15} />}
            {isAdmin ? 'Admin Mode' : 'Public View'}
          </button>
        </div>

        {/* Tab nav */}
        <nav style={{ display: 'flex', gap: 0, overflowX: 'auto' }}>
          {TABS.filter(t => !t.adminOnly || isAdmin).map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon size={15} />
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
