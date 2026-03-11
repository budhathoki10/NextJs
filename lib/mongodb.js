import mongoose from "mongoose";
const mongodburl= "mongodb://localhost:27017/nextjs"
export default dbConnect;

async function dbConnect() {
  if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable');
  }
  await mongoose.connect(mongodburl);
  return mongoose;
}
