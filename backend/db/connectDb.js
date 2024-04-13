import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://kavin:kavin123raj@cluster0.veveczz.mongodb.net/chatapp"
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB", error.message);
  }
};

export default connectToMongoDB;
