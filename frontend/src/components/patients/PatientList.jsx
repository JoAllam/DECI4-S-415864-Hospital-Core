import "./PatientList.css";

export default function PatientList({ patients }) {
  if (patients.length === 0) {
    return <p>No patients found.</p>;
  }

  return (
    <table className="patient-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Phone</th>
          <th>Blood Type</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {patients.map((patient) => (
          <tr key={patient._id}>
            <td>{patient.fullName}</td>
            <td>{patient.gender}</td>
            <td>{patient.phone}</td>
            <td>{patient.bloodType}</td>
            <td>{patient.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}