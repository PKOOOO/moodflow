const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize SQLite database
const db = new sqlite3.Database('./tracker.db', (err) => {
  if (err) {
    console.error('Error opening database:', err);
  } else {
    console.log('Connected to SQLite database');
  }
});

// Create tables on startup
db.serialize(() => {
  // Entries table
  db.run(`
    CREATE TABLE IF NOT EXISTS entries (
      id TEXT PRIMARY KEY,
      date TEXT NOT NULL UNIQUE,
      mood INTEGER NOT NULL,
      studyTime REAL NOT NULL,
      screenTime REAL NOT NULL,
      exercise INTEGER NOT NULL,
      productivity INTEGER NOT NULL,
      activities TEXT NOT NULL
    )
  `, (err) => {
    if (err) {
      console.error('Error creating entries table:', err);
    } else {
      console.log('Entries table ready');
    }
  });

  // Goals table
  db.run(`
    CREATE TABLE IF NOT EXISTS goals (
      id TEXT PRIMARY KEY,
      type TEXT NOT NULL UNIQUE,
      target REAL NOT NULL,
      unit TEXT NOT NULL
    )
  `, (err) => {
    if (err) {
      console.error('Error creating goals table:', err);
    } else {
      console.log('Goals table ready');
    }
  });
});

// Routes

// GET /entries - return all entries ordered by date desc
app.get('/entries', (req, res) => {
  db.all(
    'SELECT * FROM entries ORDER BY date DESC',
    [],
    (err, rows) => {
      if (err) {
        console.error('Error fetching entries:', err);
        res.status(500).json({ error: 'Failed to fetch entries' });
      } else {
        res.json(rows || []);
      }
    }
  );
});

// POST /entries - insert a new entry (activities stored as JSON string)
app.post('/entries', (req, res) => {
  const { date, mood, studyTime, screenTime, exercise, productivity, activities } = req.body;

  // Validate required fields
  if (!date || mood === undefined || studyTime === undefined || screenTime === undefined || 
      exercise === undefined || productivity === undefined || !activities) {
    res.status(400).json({ error: 'Missing required fields' });
    return;
  }

  const id = uuidv4();
  const activitiesJson = typeof activities === 'string' ? activities : JSON.stringify(activities);

  db.run(
    `INSERT INTO entries (id, date, mood, studyTime, screenTime, exercise, productivity, activities)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [id, date, mood, studyTime, screenTime, exercise, productivity, activitiesJson],
    function (err) {
      if (err) {
        console.error('Error inserting entry:', err);
        res.status(500).json({ error: 'Failed to insert entry' });
      } else {
        res.status(201).json({ id, message: 'Entry created successfully' });
      }
    }
  );
});

// GET /entries/:date - return a single entry by date
app.get('/entries/:date', (req, res) => {
  const { date } = req.params;

  db.get(
    'SELECT * FROM entries WHERE date = ?',
    [date],
    (err, row) => {
      if (err) {
        console.error('Error fetching entry:', err);
        res.status(500).json({ error: 'Failed to fetch entry' });
      } else if (!row) {
        res.status(404).json({ error: 'Entry not found' });
      } else {
        res.json(row);
      }
    }
  );
});

// GET /goals - return all goals
app.get('/goals', (req, res) => {
  db.all(
    'SELECT * FROM goals',
    [],
    (err, rows) => {
      if (err) {
        console.error('Error fetching goals:', err);
        res.status(500).json({ error: 'Failed to fetch goals' });
      } else {
        res.json(rows || []);
      }
    }
  );
});

// POST /goals - insert or replace a goal
app.post('/goals', (req, res) => {
  const { type, target, unit } = req.body;

  // Validate required fields
  if (!type || target === undefined || !unit) {
    res.status(400).json({ error: 'Missing required fields: type, target, unit' });
    return;
  }

  const id = uuidv4();

  db.run(
    `INSERT OR REPLACE INTO goals (id, type, target, unit)
     VALUES (?, ?, ?, ?)`,
    [id, type, target, unit],
    function (err) {
      if (err) {
        console.error('Error inserting/updating goal:', err);
        res.status(500).json({ error: 'Failed to insert/update goal' });
      } else {
        res.status(201).json({ id, message: 'Goal created/updated successfully' });
      }
    }
  );
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
