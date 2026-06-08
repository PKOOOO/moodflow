import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import '../styles/pages.css';

const data = [
  { date: 'Mon', mood: 7, productivity: 85, studyTime: 4, screenTime: 2 },
  { date: 'Tue', mood: 8, productivity: 90, studyTime: 5, screenTime: 1.5 },
  { date: 'Wed', mood: 6, productivity: 75, studyTime: 3, screenTime: 3 },
  { date: 'Thu', mood: 8, productivity: 88, studyTime: 4.5, screenTime: 2 },
  { date: 'Fri', mood: 9, productivity: 95, studyTime: 5.5, screenTime: 1 },
  { date: 'Sat', mood: 7, productivity: 80, studyTime: 3, screenTime: 4 },
  { date: 'Sun', mood: 8, productivity: 82, studyTime: 3.5, screenTime: 2.5 },
];

export default function Analytics() {
  return (
    <div className="page-container">
      <h2 className="page-title">Analytics & Charts</h2>

      <div className="chart-section">
        <h3>Mood vs Productivity</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="mood" stroke="#8884d8" />
            <Line type="monotone" dataKey="productivity" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-section">
        <h3>Study vs Screen Time</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="studyTime" fill="#8884d8" />
            <Bar dataKey="screenTime" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-section">
        <h3>Weekly Productivity Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="productivity"
              stroke="#82ca9d"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
