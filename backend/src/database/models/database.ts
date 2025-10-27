import mongoose from "mongoose";
import { config } from "../../config/app.config";

const connectDatabase = async () => {
  try {
    await mongoose.connect(config.MONGODB_URI);
    console.log("MongoDB connected successfully");    
  } catch (error) {
    console.log("Erro connecting to database");
    process.exit(1);
  }
}

export default connectDatabase;
