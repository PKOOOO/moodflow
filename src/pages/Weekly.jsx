import '../styles/pages.css';

export default function Weekly() {
  const weeklyData = {
    bestDay: 'Friday',
    averageMood: 7.6,
    totalStudyTime: 28.5,
    totalScreenTime: 16.25,
    totalExercise: 225,
    averageProductivity: 85,
    dayBreakdown: [
      { day: 'Monday', mood: 7, productivity: 85, studyTime: 4, screenTime: 2 },
      { day: 'Tuesday', mood: 8, productivity: 90, studyTime: 5, screenTime: 1.5 },
      { day: 'Wednesday', mood: 6, productivity: 75, studyTime: 3, screenTime: 3 },
      { day: 'Thursday', mood: 8, productivity: 88, studyTime: 4.5, screenTime: 2 },
      { day: 'Friday', mood: 9, productivity: 95, studyTime: 5.5, screenTime: 1 },
      { day: 'Saturday', mood: 7, productivity: 80, studyTime: 3, screenTime: 4 },
      { day: 'Sunday', mood: 8, productivity: 82, studyTime: 3.5, screenTime: 2.5 },
    ],
  };

  return (
    <div className="page-container">
      <h2 className="page-title">Weekly Report</h2>

      <div className="weekly-summary">
        <div className="summary-card">
          <div className="summary-label">Best Day</div>
          <div className="summary-value">{weeklyData.bestDay}</div>
        </div>
        <div className="summary-card">
          <div className="summary-label">Average Mood</div>
          <div className="summary-value">{weeklyData.averageMood.toFixed(1)}/10</div>
        </div>
        <div className="summary-card">
          <div className="summary-label">Total Study</div>
          <div className="summary-value">{weeklyData.totalStudyTime}h</div>
        </div>
        <div className="summary-card">
          <div className="summary-label">Avg Productivity</div>
          <div className="summary-value">{weeklyData.averageProductivity}%</div>
        </div>
      </div>

      <div className="daily-breakdown">
        <h3>Daily Breakdown</h3>
        <table className="breakdown-table">
          <thead>
            <tr>
              <th>Day</th>
              <th>Mood</th>
              <th>Productivity</th>
              <th>Study (h)</th>
              <th>Screen (h)</th>
            </tr>
          </thead>
          <tbody>
            {weeklyData.dayBreakdown.map((day, idx) => (
              <tr key={idx}>
                <td>{day.day}</td>
                <td>{day.mood}/10</td>
                <td>{day.productivity}%</td>
                <td>{day.studyTime}h</td>
                <td>{day.screenTime}h</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="weekly-stats">
        <h3>Weekly Totals</h3>
        <div className="stats-row">
          <div className="stat">
            <span className="stat-label">Total Screen Time</span>
            <span className="stat-val">{weeklyData.totalScreenTime.toFixed(1)}h</span>
          </div>
          <div className="stat">
            <span className="stat-label">Total Exercise</span>
            <span className="stat-val">{weeklyData.totalExercise}m</span>
          </div>
        </div>
      </div>
    </div>
  );
}
