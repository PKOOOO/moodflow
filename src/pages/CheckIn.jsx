import { useState } from 'react';
import '../styles/pages.css';

export default function CheckIn() {
  const [formData, setFormData] = useState({
    mood: 5,
    studyTime: 0,
    screenTime: 0,
    exercise: 0,
    productivity: 50,
    activities: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: Send to API
    alert('Check-in saved!');
  };

  return (
    <div className="page-container">
      <h2 className="page-title">Daily Check-In</h2>
      <form className="checkin-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="mood">How are you feeling? (1-10)</label>
          <input
            type="range"
            id="mood"
            name="mood"
            min="1"
            max="10"
            value={formData.mood}
            onChange={handleChange}
            className="form-range"
          />
          <div className="range-value">{formData.mood}/10</div>
        </div>

        <div className="form-group">
          <label htmlFor="studyTime">Study Time (hours)</label>
          <input
            type="number"
            id="studyTime"
            name="studyTime"
            min="0"
            max="24"
            step="0.5"
            value={formData.studyTime}
            onChange={handleChange}
            className="form-input"
            placeholder="0"
          />
        </div>

        <div className="form-group">
          <label htmlFor="screenTime">Screen Time (hours)</label>
          <input
            type="number"
            id="screenTime"
            name="screenTime"
            min="0"
            max="24"
            step="0.5"
            value={formData.screenTime}
            onChange={handleChange}
            className="form-input"
            placeholder="0"
          />
        </div>

        <div className="form-group">
          <label htmlFor="exercise">Exercise (minutes)</label>
          <input
            type="number"
            id="exercise"
            name="exercise"
            min="0"
            max="360"
            step="15"
            value={formData.exercise}
            onChange={handleChange}
            className="form-input"
            placeholder="0"
          />
        </div>

        <div className="form-group">
          <label htmlFor="productivity">Productivity Score (%)</label>
          <input
            type="range"
            id="productivity"
            name="productivity"
            min="0"
            max="100"
            value={formData.productivity}
            onChange={handleChange}
            className="form-range"
          />
          <div className="range-value">{formData.productivity}%</div>
        </div>

        <div className="form-group">
          <label htmlFor="activities">Activities (comma-separated)</label>
          <input
            type="text"
            id="activities"
            name="activities"
            value={formData.activities}
            onChange={handleChange}
            className="form-input"
            placeholder="e.g., Reading, Gaming, Socializing"
          />
        </div>

        <button type="submit" className="submit-btn">Save Check-In</button>
      </form>
    </div>
  );
}
