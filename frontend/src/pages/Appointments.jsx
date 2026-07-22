import { useEffect, useState } from "react";

import Layout from "../components/shared/Layout";
import AppointmentForm from "../components/appointments/AppointmentForm";
import AppointmentList from "../components/appointments/AppointmentList";

import {
  getAppointments,
  createAppointment,
} from "../services/appointmentService";

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    try {
      const data = await getAppointments();
      setAppointments(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddAppointment = async (appointment) => {
    try {
      await createAppointment(appointment);
      await loadAppointments();
    } catch (error) {
      console.error(error);
      alert("Failed to create appointment.");
    }
  };

  return (
    <Layout>
      <h1>Appointment System</h1>

      <AppointmentForm onAddAppointment={handleAddAppointment} />

      <hr />

      <AppointmentList appointments={appointments} />
    </Layout>
  );
}