import { useEffect, useState } from "react";
import { getHistory } from "../services/history.service";
import { History } from "../interfaces/History";
import { useTranslation } from "react-i18next";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function CryptoChart({ cryptoId }: { cryptoId?: string }) {
  const [history, setHistory] = useState<History[]>([]);
  const [interval, setInterval] = useState<string>("m1");

  const { t } = useTranslation();

  const intervalOptions = [
    { data: "m1", label: t("oneday") },
    { data: "m5", label: t("fivedays") },
    { data: "m15", label: t("fifteendays") },
    { data: "h1", label: t("thirtydays") },
    { data: "h2", label: t("twomoths") },
    { data: "h6", label: t("sixmonths") },
    { data: "h12", label: t("oneyear") },
];

  useEffect(() => {
    if (cryptoId) {
      getHistory(cryptoId, interval)
        .then((data) => setHistory(data.data))
        .catch(() => setHistory([]));
    }
  }, [cryptoId, interval]);

  const handleIntervalChange = (newInterval: string) => {
    setInterval(newInterval);
  };

  const chartData = {
    labels: history.map((item) => {
      const date = new Date(item.date);
      if (["m1", "m5", "m15"].includes(interval)) {
        return date.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          day: "numeric",
          month: "short",
        });
      } else {
        return date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        });
      }
    }),
    datasets: [
      {
        label: `Price (USD) - ${interval}`,
        data: history.map((item) => parseFloat(item.priceUsd)),
        borderColor: "rgba(59, 130, 246, 1)",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        borderWidth: 2,
        pointRadius: 1,
        tension: 0.3,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        labels: {
          color: "inherit",
          font: { size: 12 },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: interval === "m1" ? "Time" : "Date",
          color: "inherit",
        },
        ticks: {
          color: "inherit",
        },
      },
      y: {
        title: {
          display: true,
          text: "Price (USD)",
          color: "inherit",
        },
        ticks: {
          color: "inherit",
        },
        beginAtZero: false,
      },
    },
  };

  return (
    <div className="p-6 dark:bg-gray-700 bg-gray-100 text-gray-900 dark:text-gray-100 rounded-lg shadow-lg">
      <div className="relative">
        {history.length > 0 ? (
          <div className="w-full">
            <Line data={chartData} options={chartOptions} />
          </div>
        ) : (
          <p className="text-center text-gray-500">No data available</p>
        )}
      </div>
      <div className="flex flex-wrap gap-3 mb-6">
        {intervalOptions.map((int) => (
          <button
            key={int.data}
            onClick={() => handleIntervalChange(int.data)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              int.data === interval
                ? "bg-blue-500 text-white"
                : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            } hover:bg-blue-400 hover:text-white`}
          >
            {int.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CryptoChart;
