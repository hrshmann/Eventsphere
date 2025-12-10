const mongoose = require ("mongoose");
const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/Project_Back"

// Check actual connection state, not just a flag
const isConnected = () => {
  return mongoose.connection.readyState === 1; // 1 = connected
};

const connectToMongo = async ()=>{
   // Check actual connection state
   if (isConnected()) {
     console.log("MongoDB already connected");
     return;
   }
   
   try{
    await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
      socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
    });
    console.log("Mongo db connected successfully");
   } catch (err){
    console.error("Mongo db connection failed", err.message);
    // Re-throw the error so callers can handle it
    throw err;
   }
};

// Listen for disconnection events to handle reconnection
mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err.message);
});

// For Vercel serverless, connect on first request if not connected
const ensureConnection = async () => {
  // Check actual connection state, not just a flag
  if (!isConnected()) {
    await connectToMongo();
  }
};

module.exports = { connectToMongo, ensureConnection };