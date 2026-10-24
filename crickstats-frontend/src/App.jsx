import { useState, useCallback } from 'react';
import Header from './components/Header';
import MatchesView from './components/MatchesView';
import StandingsView from './components/StandingsView';
import LeaderboardsView from './components/LeaderboardsView';
import TeamsView from './components/TeamsView';
import AdminView from './components/AdminView';

export default function App() {
  const [activeTab, setActiveTab] = useState('matches');
  const [isAdmin, setIsAdmin] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleDataChange = useCallback(() => {
    setRefreshKey(k => k + 1);
  }, []);

  const handleSetAdmin = (v) => {
    setIsAdmin(v);
    if (v) setActiveTab('admin');
    else setActiveTab('matches');
  };

  const renderTab = () => {
    switch (activeTab) {
      case 'matches':      return <MatchesView key={refreshKey} />;
      case 'standings':    return <StandingsView key={refreshKey} />;
      case 'leaderboards': return <LeaderboardsView key={refreshKey} />;
      case 'teams':        return <TeamsView key={refreshKey} />;
      case 'admin':        return <AdminView key={refreshKey} onDataChange={handleDataChange} />;
      default:             return <MatchesView key={refreshKey} />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#0a0f1e' }}>
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isAdmin={isAdmin}
        setIsAdmin={handleSetAdmin}
      />

      {/* Subtle grid background */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
        backgroundImage: `
          radial-gradient(ellipse at 20% 50%, rgba(245, 158, 11, 0.04) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 20%, rgba(59, 130, 246, 0.04) 0%, transparent 50%),
          linear-gradient(rgba(30, 45, 74, 0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(30, 45, 74, 0.08) 1px, transparent 1px)
        `,
        backgroundSize: '100% 100%, 100% 100%, 48px 48px, 48px 48px',
      }} />

      <main style={{ maxWidth: 1400, margin: '0 auto', padding: '32px 24px', position: 'relative', zIndex: 1 }}>
        {renderTab()}
      </main>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid #1e2d4a',
        padding: '20px 24px',
        textAlign: 'center',
        color: '#2d3f5a',
        fontSize: 13,
        position: 'relative', zIndex: 1,
      }}>
        <span style={{ color: '#4a6080' }}>
          CrickStats · IPL 2024 · Powered by LocalStorage Mock DB (Oracle DDL Compatible) · Built with React + Vite
        </span>
      </footer>
    </div>
  );
}
