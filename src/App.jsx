import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Today from './pages/Today';
import CheckIn from './pages/CheckIn';
import Analytics from './pages/Analytics';
import Insights from './pages/Insights';
import Weekly from './pages/Weekly';
import Goals from './pages/Goals';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Today />} />
          <Route path="/checkin" element={<CheckIn />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/weekly" element={<Weekly />} />
          <Route path="/goals" element={<Goals />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
