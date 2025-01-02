import { useEffect, useState } from "react";
import { getHistory } from "../services/history.service";
import { History } from "../interfaces/History";

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
  
  // Registrar elementos necesarios de Chart.js
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
            const date = new Date(item.time);
            if (interval === "m1" || interval === "m5" || interval === "m15") {
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
                display: true,
                labels: {
                    color: "rgb(55, 65, 81)",
                    font: { size: 12 },
                },
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: interval === "m1" ? "Time" : "Date",
                    color: "rgb(55, 65, 81)",
                },
                ticks: {
                    color: "rgb(55, 65, 81)",
                },
            },
            y: {
                title: {
                    display: true,
                    text: "Price (USD)",
                    color: "rgb(55, 65, 81)",
                },
                ticks: {
                    color: "rgb(55, 65, 81)",
                },
                beginAtZero: false,
            },
        },
    };

    return (
        <div className="p-4 dark:bg-gray-700 dark:text-gray-100">
            <h1 className="text-xl font-bold mb-4">CryptoChart</h1>
            <div className="flex flex-wrap gap-2 mb-4">
                {["m1", "m5", "m15", "m30", "h1", "h2", "h6", "h12", "d1"].map((int) => (
                    <button
                        key={int}
                        onClick={() => handleIntervalChange(int)}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                            int === interval
                                ? "bg-blue-500"
                                : "bg-gray-200 dark:bg-gray-800"
                        } hover:bg-blue-400`}
                    >
                        {int.toUpperCase()}
                    </button>
                ))}
            </div>
            <div>
                {history.length > 0 ? (
                    <Line
                        data={chartData}
                        options={{
                            ...chartOptions,
                            plugins: {
                                ...chartOptions.plugins,
                                legend: {
                                    ...chartOptions.plugins.legend,
                                    labels: {
                                        color: "rgb(255, 255, 255)",
                                    },
                                },
                            },
                            scales: {
                                x: {
                                    ...chartOptions.scales.x,
                                    ticks: {
                                        color: "rgb(255, 255, 255)",
                                    },
                                },
                                y: {
                                    ...chartOptions.scales.y,
                                    ticks: {
                                        color: "rgb(255, 255, 255)",
                                    },
                                },
                            },
                        }}
                    />
                ) : (
                    <p className="text-center text-gray-500">No data available</p>
                )}
            </div>
        </div>
    );
}

export default CryptoChart;
