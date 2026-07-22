const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "https://hospital-core-deci.netlify.app",
  })
);
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