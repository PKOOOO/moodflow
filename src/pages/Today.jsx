import '../styles/pages.css';

export default function Today() {
  return (
    <div className="page-container">
      <h2 className="page-title">Today's Dashboard</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Mood</div>
          <div className="stat-value">8/10</div>
          <div className="stat-emoji">😊</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Study Time</div>
          <div className="stat-value">4h 30m</div>
          <div className="stat-emoji">📚</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Screen Time</div>
          <div className="stat-value">2h 15m</div>
          <div className="stat-emoji">📱</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Exercise</div>
          <div className="stat-value">45 min</div>
          <div className="stat-emoji">🏃</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Productivity</div>
          <div className="stat-value">87%</div>
          <div className="stat-emoji">✨</div>
        </div>
      </div>
      <div className="quick-actions">
        <h3>Quick Actions</h3>
        <button className="action-btn">Log Activity</button>
        <button className="action-btn">Add Entry</button>
        <button className="action-btn">View Insights</button>
      </div>
    </div>
  );
}
