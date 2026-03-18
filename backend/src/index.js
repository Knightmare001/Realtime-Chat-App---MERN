import express from "express";
import env from "dotenv";
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";

env.config();

const app = express();

const PORT = process.env.PORT;

// ekstrak json data from body
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`server runing on port ${PORT}`);
  connectDB();
});
