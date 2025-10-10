// Basic server setupmongodb+srv://ramsandota_db_user:ramsandota_db_123@uki-project.ukhvnam.mongodb.net/myapp?retryWrites=true&w=majority appName=Uki-project
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRoutes from "./routes/userRoutes.js";
dotenv.config({});

const app = express();

const PORT = 5000;
app.use(express.json());

const connectDB = async () => {
  try {
    await mongoose.connect("").then(() => console.log("Connected! monodb"));
  } catch (error) {
    console.error(`error:${error}`);
  }
};
connectDB();

// HTTP method handling

app.get("/", (req, res) => {
  res.send("hello express");
});

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
