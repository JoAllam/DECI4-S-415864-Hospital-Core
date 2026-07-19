import { useState } from "react";
import "./PatientForm.css";

export default function PatientForm({ onAddPatient }) {
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    gender: "Male",
    phone: "",
    email: "",
    address: "",
    bloodType: "O+",
    allergies: "",
    medicalHistory: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddPatient({
      ...formData,
      allergies: formData.allergies
        ? formData.allergies.split(",").map((a) => a.trim())
        : [],
    });

    setFormData({
      fullName: "",
      dateOfBirth: "",
      gender: "Male",
      phone: "",
      email: "",
      address: "",
      bloodType: "O+",
      allergies: "",
      medicalHistory: "",
    });
  };

  return (
      <form className="patient-form" onSubmit={handleSubmit}>
      <h2>Add Patient</h2>

      <input
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        required
      />

      <input
        type="date"
        name="dateOfBirth"
        value={formData.dateOfBirth}
        onChange={handleChange}
        required
      />

      <input
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
      />

      <textarea
        name="medicalHistory"
        placeholder="Medical History"
        value={formData.medicalHistory}
        onChange={handleChange}
      />

      <button type="submit">Add Patient</button>
    </form>
  );
}