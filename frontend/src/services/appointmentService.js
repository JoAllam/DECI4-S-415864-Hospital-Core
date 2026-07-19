import axios from "axios";

const API = "http://localhost:5001/api/appointments";

export const getAppointments = async () => {
  const response = await axios.get(API);
  return response.data;
};

export const createAppointment = async (appointment) => {
  const response = await axios.post(API, appointment);
  return response.data;
};