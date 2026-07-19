const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const patientRoutes = require("./routes/patientRoutes");

// Health Check Route
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Hospital API is running",
  });
});

app.use("/api/patients", patientRoutes);

module.exports = app;