const express = require("express");

const {
  createPatient,
  getPatients,
  getPatientById,
  updatePatient,
  deletePatient,
} = require("../controllers/patientController");

const router = express.Router();

router.route("/")
  .get(getPatients)
  .post(createPatient);

router.route("/:id")
  .get(getPatientById)
  .put(updatePatient)
  .delete(deletePatient);

module.exports = router;