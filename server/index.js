import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import connectDB from "./db/connectDB.js";
import dotenv from "dotenv";
dotenv.config();
import router from "./routes/posts.js";
import postsRouter from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use("/", postsRouter);

// app.get("/", (req, res) => {
//   res.send("First");
// });

const start = async () => {
  try {
    await connectDB(process.env.MONGOOSE_URI);
    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

start();
