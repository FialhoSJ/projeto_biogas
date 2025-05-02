import React from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./Dashboard.css"; 

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Produção de Biogás (m³)",
        data: [30, 50, 40, 60, 70, 90],
        borderColor: "#4CAF50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const barData = {
    labels: ["Setor 1", "Setor 2", "Setor 3", "Setor 4"],
    datasets: [
      {
        label: "Consumo de Energia (kWh)",
        data: [200, 300, 250, 400],
        backgroundColor: ["#4CAF50", "#81C784", "#66BB6A", "#388E3C"],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Dashboard de Biogás" },
    },
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="chart-container">
        <Line data={lineData} options={options} />
      </div>
      <div className="chart-container">
        <Bar data={barData} options={options} />
      </div>
    </div>
  );
}

export default Dashboard;
