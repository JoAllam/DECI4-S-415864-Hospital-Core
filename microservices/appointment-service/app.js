const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

const appointmentRoutes = require("./routes/appointmentRoutes");

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    service: "Appointment Microservice",
  });
});

app.use("/api/appointments", appointmentRoutes);

module.exports = app;