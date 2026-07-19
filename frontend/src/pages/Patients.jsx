import { useEffect, useState } from "react";

import Layout from "../components/shared/Layout";
import PatientList from "../components/patients/PatientList";
import PatientForm from "../components/patients/PatientForm";

import {
  getPatients,
  createPatient,
} from "../services/patientService";

export default function Patients() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    loadPatients();
  }, []);

  const loadPatients = async () => {
    const data = await getPatients();
    setPatients(data);
  };

  const handleAddPatient = async (patient) => {
  try {
    const newPatient = await createPatient(patient);
    console.log(newPatient);

    loadPatients();
  } catch (error) {
    console.error(error.response?.data || error.message);
    alert("Failed to add patient.");
  }
};

  return (
    <Layout>
      <h1>Patient Management</h1>

      <PatientForm onAddPatient={handleAddPatient} />

      <hr />

      <PatientList patients={patients} />
    </Layout>
  );
}