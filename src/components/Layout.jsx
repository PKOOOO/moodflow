import { Link, useLocation } from 'react-router-dom';
import '../styles/Layout.css';

export default function Layout({ children }) {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Today', icon: '📊' },
    { path: '/checkin', label: 'Check-in', icon: '✅' },
    { path: '/analytics', label: 'Analytics', icon: '📈' },
    { path: '/insights', label: 'Insights', icon: '💡' },
    { path: '/weekly', label: 'Weekly', icon: '📅' },
    { path: '/goals', label: 'Goals', icon: '🎯' },
  ];

  return (
    <div className="layout-container">
      {/* Header */}
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">StudentPulse</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <div className="nav-items">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
