import { Link } from "react-router-dom";
import "./Layout.css";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <aside className="sidebar">
        <h2>🏥 Hospital</h2>

        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/patients">Patients</Link>
          <Link to="/appointments">Appointments</Link>
        </nav>
      </aside>

      <main className="content">
        <header className="topbar">
          <h1>Hospital Management System</h1>
        </header>

        {children}
      </main>
    </div>
  );
}