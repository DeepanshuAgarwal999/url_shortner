import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDatabase = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in environment variables");
    }
    const connection = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "url_shortner",
    });
    console.log("Connected to MongoDB");
    return connection;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDatabase;
