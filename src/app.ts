import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

// initialize express server
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

app.use("/", (req: Request, res: Response) => {
  return res.json({ message: "Server running" });
});

export default app;
