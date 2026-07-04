const taskRoutes = require("./routes/taskRoutes");
const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
connectDB();

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Task Management API is Running...");
});
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${PORT}`);
});