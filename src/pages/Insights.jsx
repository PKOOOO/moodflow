import '../styles/pages.css';

export default function Insights() {
  const insights = [
    {
      icon: '💡',
      title: 'Peak Study Window',
      description: 'You are most productive between 7 PM - 9 PM. Try scheduling important tasks during this time.',
      metric: '18% more productive'
    },
    {
      icon: '🎯',
      title: 'Mood Impact',
      description: 'Your productivity increases by 25% when your mood is above 7. Focus on mood-boosting activities.',
      metric: '7/10 average mood'
    },
    {
      icon: '📱',
      title: 'Screen Time Alert',
      description: 'Productivity drops when screen time exceeds 5 hours. Try limiting daily usage to 3-4 hours.',
      metric: '2.5h daily average'
    },
    {
      icon: '🏃',
      title: 'Exercise Boost',
      description: 'Exercise days show an average productivity increase of 18%. Aim for 30-45 minutes daily.',
      metric: '+18% on exercise days'
    },
    {
      icon: '📈',
      title: 'Weekly Trend',
      description: 'Your productivity is trending upward this week with consistent daily check-ins and exercise.',
      metric: '+12% vs last week'
    },
    {
      icon: '✨',
      title: 'Consistency Win',
      description: 'You have logged 7 consecutive days! Keep up the momentum for better insights.',
      metric: '7 day streak'
    },
  ];

  return (
    <div className="page-container">
      <h2 className="page-title">AI Insights & Recommendations</h2>
      <div className="insights-grid">
        {insights.map((insight, idx) => (
          <div key={idx} className="insight-card">
            <div className="insight-icon">{insight.icon}</div>
            <h3 className="insight-title">{insight.title}</h3>
            <p className="insight-description">{insight.description}</p>
            <div className="insight-metric">{insight.metric}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
