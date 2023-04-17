import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./database.js";

dotenv.config();

// initialize express server
const app = express();

// connect to database
db()
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Connection error:", err));

// middlewares
app.use(cors());
app.use(express.json());

app.use("/", (req: Request, res: Response) => {
  return res.json({ message: "Server running" });
});

export default app;
