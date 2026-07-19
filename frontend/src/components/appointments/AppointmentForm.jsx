import { useState } from "react";
import "../patients/PatientForm.css";

export default function AppointmentForm({ onAddAppointment }) {
  const [formData, setFormData] = useState({
    patientName: "",
    doctor: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddAppointment(formData);

    setFormData({
      patientName: "",
      doctor: "",
      date: "",
      time: "",
    });
  };

  return (
      <form className="patient-form" onSubmit={handleSubmit}>      
      <input
        name="patientName"
        placeholder="Patient Name"
        value={formData.patientName}
        onChange={handleChange}
        required
      />

      <input
        name="doctor"
        placeholder="Doctor"
        value={formData.doctor}
        onChange={handleChange}
        required
      />

      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />

      <input
        type="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
      />

      <button type="submit">
        Book Appointment
      </button>
    </form>
  );
}