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

// Health check endpoint (for debugging)
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    env: {
      hasMongoURI: !!process.env.MONGODB_URI,
      hasJWTSecret: !!process.env.JWT_SECRET,
      nodeEnv: process.env.NODE_ENV,
      vercel: process.env.VERCEL
    }
  });
});

// Middleware to ensure MongoDB connection before API routes
app.use('/api/*', async (req, res, next) => {
  try {
    await ensureConnection();
    next();
  } catch (error) {
    console.error('Database connection error:', error.message);
    res.status(503).json({ 
      success: false, 
      error: 'Database connection failed. Please try again later.' 
    });
  }
});

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

// Global error handler for unhandled errors
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(err.status || 500).json({
    success: false,
    error: process.env.NODE_ENV === 'production' 
      ? 'Internal server error' 
      : err.message
  });
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});

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
// Vercel expects a handler function, but Express app export also works
// Using app export is fine for Express apps with vercel.json routing
module.exports = app;

// Alternative: If you need a handler function, use this instead:
// module.exports = (req, res) => {
//   return app(req, res);
// };
