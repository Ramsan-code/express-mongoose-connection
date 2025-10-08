// Basic server setup
import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";

const app = express();

const PORT = 5000;
app.use(express.json());

const connectDB = async () => {
  try {
    await mongoose
      .connect("mongodb://127.0.0.1:27017/test")
      .then(() => console.log("Connected! monodb"));
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
