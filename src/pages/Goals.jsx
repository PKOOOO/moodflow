import { useState } from 'react';
import '../styles/pages.css';

export default function Goals() {
  const [goals, setGoals] = useState([
    { id: 1, type: 'Study Time', target: 20, unit: 'hours/week', current: 18, completed: false },
    { id: 2, type: 'Screen Time', target: 4, unit: 'hours/day', current: 2.5, completed: false },
    { id: 3, type: 'Exercise', target: 3, unit: 'times/week', current: 3, completed: true },
    { id: 4, type: 'Average Mood', target: 7, unit: '/10', current: 7.6, completed: true },
  ]);

  const [newGoal, setNewGoal] = useState({
    type: '',
    target: '',
    unit: '',
  });

  const handleAddGoal = (e) => {
    e.preventDefault();
    if (newGoal.type && newGoal.target) {
      const goal = {
        id: Math.max(...goals.map(g => g.id), 0) + 1,
        ...newGoal,
        target: parseFloat(newGoal.target),
        current: 0,
        completed: false,
      };
      setGoals([...goals, goal]);
      setNewGoal({ type: '', target: '', unit: '' });
    }
  };

  const toggleGoal = (id) => {
    setGoals(goals.map(g => g.id === id ? { ...g, completed: !g.completed } : g));
  };

  const deleteGoal = (id) => {
    setGoals(goals.filter(g => g.id !== id));
  };

  const getProgressPercentage = (current, target) => {
    return Math.min((current / target) * 100, 100);
  };

  return (
    <div className="page-container">
      <h2 className="page-title">My Goals</h2>

      <div className="goals-list">
        {goals.map((goal) => (
          <div key={goal.id} className={`goal-item ${goal.completed ? 'completed' : ''}`}>
            <div className="goal-header">
              <input
                type="checkbox"
                checked={goal.completed}
                onChange={() => toggleGoal(goal.id)}
                className="goal-checkbox"
              />
              <div className="goal-info">
                <h3 className="goal-type">{goal.type}</h3>
                <p className="goal-target">
                  {goal.target} {goal.unit}
                </p>
              </div>
              <button
                className="delete-btn"
                onClick={() => deleteGoal(goal.id)}
              >
                ✕
              </button>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${getProgressPercentage(goal.current, goal.target)}%`,
                }}
              />
            </div>
            <p className="progress-text">
              {goal.current} / {goal.target} {goal.unit}
            </p>
          </div>
        ))}
      </div>

      <div className="add-goal-section">
        <h3>Add New Goal</h3>
        <form className="add-goal-form" onSubmit={handleAddGoal}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Goal type (e.g., Study Time)"
              value={newGoal.type}
              onChange={(e) => setNewGoal({ ...newGoal, type: e.target.value })}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              placeholder="Target"
              value={newGoal.target}
              onChange={(e) => setNewGoal({ ...newGoal, target: e.target.value })}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Unit (e.g., hours/week)"
              value={newGoal.unit}
              onChange={(e) => setNewGoal({ ...newGoal, unit: e.target.value })}
              className="form-input"
            />
          </div>
          <button type="submit" className="submit-btn">Add Goal</button>
        </form>
      </div>
    </div>
  );
}
