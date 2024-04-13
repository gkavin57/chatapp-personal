import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRouter from "./routes/auth.route.js";
import messageRouter from "./routes/message.route.js";
import userRoutes from "./routes/user.route.js";
import connectToMongoDB from "./db/connectDb.js";

const app = express();
const PORT = process.env.PORT || 6000;

dotenv.config();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server is running on ${PORT} this port`);
});
