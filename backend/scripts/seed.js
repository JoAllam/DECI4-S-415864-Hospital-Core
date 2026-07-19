const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const connectDB = require("../src/config/db");

const Patient = require("../src/models/Patient");

const patients = [
  {
    fullName: "Ahmed Hassan",
    dateOfBirth: "1999-02-15",
    gender: "Male",
    phone: "01011111111",
    email: "ahmed@test.com",
    address: "Cairo",
    bloodType: "A+",
    allergies: ["Penicillin"],
    medicalHistory: "Diabetes",
    status: "Active",
  },
  {
    fullName: "Sara Mohamed",
    dateOfBirth: "2001-08-09",
    gender: "Female",
    phone: "01022222222",
    email: "sara@test.com",
    address: "Alexandria",
    bloodType: "O+",
    allergies: [],
    medicalHistory: "Asthma",
    status: "Active",
  },
  {
    fullName: "Omar Ali",
    dateOfBirth: "1988-05-03",
    gender: "Male",
    phone: "01033333333",
    email: "omar@test.com",
    address: "Hurghada",
    bloodType: "B+",
    allergies: ["Dust"],
    medicalHistory: "Hypertension",
    status: "Inactive",
  },
];

async function seedDatabase() {
  try {
    await connectDB();

    await Patient.deleteMany();

    await Patient.insertMany(patients);

    console.log("Database seeded successfully.");

    mongoose.connection.close();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

seedDatabase();