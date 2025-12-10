const mongoose = require ("mongoose");
const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/Project_Back"

let isConnected = false;

const connectToMongo = async ()=>{
   if (isConnected) {
     console.log("MongoDB already connected");
     return;
   }
   
   try{
    await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
    });
    isConnected = true;
    console.log("Mongo db connected successfully");
   } catch (err){
    console.error("Mongo db connection failed", err.message);
    // Don't throw - let the function start, connection will retry on first request
    isConnected = false;
   }
};

// For Vercel serverless, connect on first request if not connected
const ensureConnection = async () => {
  if (!isConnected) {
    await connectToMongo();
  }
};

module.exports = { connectToMongo, ensureConnection };