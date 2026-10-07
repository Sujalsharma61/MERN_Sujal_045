const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const studentRoutes = require("./routes/studentRoutes");

const app = express();


// Connect MongoDB
connectDB();


// Middleware
app.use(cors());
app.use(express.json());


// Home route
app.get("/", (req, res) => {
  res.send("Student Management System API is running");
});


// Student routes
app.use("/api/students", studentRoutes);


// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});