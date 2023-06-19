'use client'
import React, { useState, useEffect } from "react";
import styles from "../page.module.css";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler
);

function Chartsection() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const barChartData = {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          label: "Data-1",
          data: [200, 400, 600, 800, 1000, 1200],
          borderColor: "rgb(53,162,235)",
          backgroundColor: "rgb(53,162,235,0.5)",
        },
      ],
    };

    const lineChartData = {
      labels: [
        "MarCh 1",
        "March 3",
        "March 5",
        "March 7",
        "March 9",
        "March 13",
      ],
      datasets: [
        {
          label: "Data-2",
          data: [1000,1500, 3000, 2500, 1500, 1600, 2800,3200,3500,],
          borderColor: "rgb(255,99,132)",
          backgroundColor: "rgb(255,99,132,0.5)",
        },
      ],
    };

    setChartData({ barChartData, lineChartData });

    setChartOptions({
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Data in Graph",
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    });
  }, []);

  return (
    <>
      <div className={styles.bothchart}>
        <div className={styles.chartcontainer}>
          {chartData.barChartData && (
            <Bar data={chartData.barChartData} options={chartOptions} />
          )}
        </div>
        <div className={styles.linechartcontainer}>
          {chartData.lineChartData && (
            <Line data={chartData.lineChartData} options={chartOptions} />
          )}
        </div>
      </div>
    </>
  );
}

export default Chartsection;
