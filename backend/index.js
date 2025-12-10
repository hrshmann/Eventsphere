// Import required modules
require('dotenv').config();
const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');
const path = require('path'); // for serving frontend build

// Connect to MongoDB
connectToMongo();

const app = express();
const port = process.env.PORT || 5000; // Use environment port if deployed

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

// Serve frontend build (only in production)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'build')));
  
  // All unmatched routes go to React frontend
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

// Start server (only if not in Vercel serverless environment)
if (process.env.VERCEL !== '1') {
  app.listen(port, () => {
    console.log(`Event Manager backend listening at http://localhost:${port}`);
  });
}

// Export for Vercel serverless
module.exports = app;
