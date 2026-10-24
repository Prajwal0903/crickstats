// TeamBadge.jsx — Reusable colored team abbreviation badge
import { FRANCHISES } from '../data/franchises';

const TEAM_COLORS = {
  1:  { bg: '#004BA0', text: '#D4AF37' },   // MI
  2:  { bg: '#1B2A4A', text: '#FFFF00' },   // CSK
  3:  { bg: '#EC1C24', text: '#fff' },       // RCB
  4:  { bg: '#3A225D', text: '#D4AF37' },   // KKR
  5:  { bg: '#17479E', text: '#EF1C25' },   // DC
  6:  { bg: '#ED1B24', text: '#fff' },       // PBKS
  7:  { bg: '#254AA5', text: '#EB2D6B' },   // RR
  8:  { bg: '#FF822A', text: '#000' },       // SRH
  9:  { bg: '#0057A8', text: '#A4C8E1' },   // LSG
  10: { bg: '#1D2951', text: '#C8A951' },   // GT
};

export default function TeamBadge({ franchiseId, size = 'md' }) {
  const franchise = FRANCHISES.find(f => f.franchise_id === franchiseId);
  if (!franchise) return null;

  const colors = TEAM_COLORS[franchiseId] || { bg: '#1e2d4a', text: '#fff' };
  const sizes = {
    sm: { w: 28, h: 28, fontSize: 9 },
    md: { w: 36, h: 36, fontSize: 11 },
    lg: { w: 48, h: 48, fontSize: 14 },
    xl: { w: 64, h: 64, fontSize: 16 },
  };
  const s = sizes[size] || sizes.md;

  return (
    <div style={{
      width: s.w, height: s.h,
      borderRadius: size === 'xl' ? 14 : size === 'lg' ? 12 : 8,
      background: colors.bg,
      color: colors.text,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontWeight: 900, fontSize: s.fontSize,
      letterSpacing: '-0.5px',
      flexShrink: 0,
      boxShadow: `0 2px 8px ${colors.bg}55`,
    }}>
      {franchise.abbr}
    </div>
  );
}
