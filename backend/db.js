const mongoose = require ("mongoose");
const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/Project_Back"

const connectToMongo = async ()=>{
   try{
    await mongoose.connect(mongoURI);
    console.log("Mongo db connected successfully");
   } catch (err){
    console.log("Mongo db connection failed", err);
   }
};
module.exports = connectToMongo;