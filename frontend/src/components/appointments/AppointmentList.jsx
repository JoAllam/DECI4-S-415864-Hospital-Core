export default function AppointmentList({ appointments }) {
  if (appointments.length === 0)
    return <p>No appointments scheduled.</p>;

  return (
    <table className="patient-table">
      <thead>
        <tr>
          <th>Patient</th>
          <th>Doctor</th>
          <th>Date</th>
          <th>Time</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {appointments.map((appointment) => (
          <tr key={appointment._id}>
            <td>{appointment.patientName}</td>
            <td>{appointment.doctor}</td>
            <td>{appointment.date}</td>
            <td>{appointment.time}</td>
            <td>{appointment.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}