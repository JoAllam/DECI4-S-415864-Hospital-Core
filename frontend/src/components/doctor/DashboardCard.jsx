import "./DashboardCard.css";

export default function DashboardCard({ title, value, ...props }) {
  return (
    <div className="dashboard-card" {...props}>
      <h3>{title}</h3>
      <h1>{value}</h1>
    </div>
  );
}