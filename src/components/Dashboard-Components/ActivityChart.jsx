import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import ChartAnnotation from "chartjs-plugin-annotation";
import PropTypes from "prop-types";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);
ChartJS.register(ChartAnnotation);

function ActivityChart({ selectedPeriod, setSelectedPeriod }) {
  const [fontSize, setFontSize] = useState(window.innerWidth < 768 ? 10 : 12);

  useEffect(() => {
    const handleResize = () => {
      setFontSize(window.innerWidth < 768 ? 10 : 12);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getChartData = (period) => {
    switch (period) {
      case "Last Week":
        return [1.2, 1.5, 1.8, 2, 2.1, 1.9, 2.3];
      case "This Month":
        return [1, 2, 1.5, 2.5, 2.8, 2.2, 3];
      case "Last Month":
        return [1.1, 1.3, 1.4, 1.7, 1.9, 2, 2.5];
      default:
        return [1, 2, 1.5, 2.5, 2, 2.2, 2];
    }
  };

  const data = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [
      {
        label: "Tasks",
        data: getChartData(selectedPeriod),
        borderColor: "#000000",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        borderWidth: 2,
        tension: 0.4,
        pointBackgroundColor: "#3B82F6",
        pointBorderColor: "#3B82F6",
        pointHoverBackgroundColor: "#3B82F6",
        pointHoverBorderColor: "#3B82F6",
        pointRadius: [0, 5, 0, 0, 0, 0, 0],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    resize: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.raw} Task`,
        },
      },
      annotation: {
        annotations: [
          {
            type: "label",
            xValue: 1,
            yValue: 2,
            content: "UI/UX",
            font: { size: fontSize, weight: "bold" },
            position: "top",
            backgroundColor: "black",
            color: "white",
            borderRadius: 10,
            padding: { top: 8, bottom: 8, left: 12, right: 12 },
            textAlign: "center",
            fontFamily: "Arial",
            xAdjust: 0,
            yAdjust: -20,
          },
        ],
      },
    },
    scales: {
      x: { grid: { display: false } },
      y: {
        beginAtZero: true,
        max: 3,
        ticks: { stepSize: 1 },
        grid: { display: false },
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-lg sm:max-w-xl">
      <div className="flex justify-between items-center w-full">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
          Activity
        </h2>
        <select
          className="text-xs sm:text-sm md:text-base text-gray-500 bg-white border border-gray-300 rounded-lg px-2 py-1 focus:outline-none"
          value={selectedPeriod}
          onChange={(e) => setSelectedPeriod(e.target.value)}
        >
          <option>This Week</option>
          <option>Last Week</option>
          <option>This Month</option>
          <option>Last Month</option>
        </select>
      </div>
      <div className="w-full">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

ActivityChart.propTypes = {
  selectedPeriod: PropTypes.string.isRequired,
  setSelectedPeriod: PropTypes.func.isRequired,
};

export default ActivityChart;
