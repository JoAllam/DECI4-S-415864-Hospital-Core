import { useEffect, useState } from "react";

import Layout from "../components/shared/Layout";
import DashboardCard from "../components/doctor/DashboardCard";

import { getDashboardStats } from "../services/DashboardService";

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalPatients: 0,
    activePatients: 0,
    todaysAppointments: 0,
    pendingRecords: 0,
  });

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    const data = await getDashboardStats();
    setStats(data);
  };

  return (
    <Layout>
      <h2>Doctor Dashboard</h2>

      <div className="dashboard-grid">
        <DashboardCard
          title="Total Patients"
          value={stats.totalPatients}
          data-testid="total-patients"
        />

        <DashboardCard
          title="Active Patients"
          value={stats.activePatients}
          data-testid="active-patients"
        />

        <DashboardCard
          title="Total Appointments"
          value={stats.todaysAppointments}
          data-testid="total-appointments"
        />

        <DashboardCard
          title="Pending Records"
          value={stats.pendingRecords}
          data-testid="pending-records"
        />
      </div>
    </Layout>
  );
}