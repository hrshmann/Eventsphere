// Import required modules
require('dotenv').config();
const { connectToMongo, ensureConnection } = require('./db');
const express = require('express');
const cors = require('cors');
const path = require('path'); // for serving frontend build
const fs = require('fs');

// Connect to MongoDB (non-blocking for serverless)
// In serverless, connection happens on first request
if (process.env.VERCEL !== '1') {
  connectToMongo();
}

const app = express();
const port = process.env.PORT || 5000; // Use environment port if deployed

// Middlewares
app.use(cors());
app.use(express.json());

// Middleware to ensure MongoDB connection before API routes
app.use('/api/*', async (req, res, next) => {
  await ensureConnection();
  next();
});

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

// Serve frontend build (check both build and public folders for Vercel compatibility)
const buildPath = path.join(__dirname, 'build');
const publicPath = path.join(__dirname, 'public');

if (process.env.NODE_ENV === 'production' || process.env.VERCEL) {
  // Try build folder first, then public folder
  if (fs.existsSync(buildPath)) {
    app.use(express.static(buildPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(buildPath, 'index.html'));
    });
  } else if (fs.existsSync(publicPath)) {
    app.use(express.static(publicPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(publicPath, 'index.html'));
    });
  } else {
    // If no build folder exists, return a simple message
    app.get('*', (req, res) => {
      res.status(404).send('Frontend build not found. Please run npm run build first.');
    });
  }
}

// Start server (only if not in Vercel serverless environment)
if (process.env.VERCEL !== '1') {
  app.listen(port, () => {
    console.log(`Event Manager backend listening at http://localhost:${port}`);
  });
}

// Export for Vercel serverless
module.exports = app;
