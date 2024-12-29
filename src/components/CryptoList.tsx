import { useEffect, useState } from "react";

import { getCoins } from "../services/coins.service";

import { Crypto } from "../interfaces/Crypto";

function CryptoList() {
  const [cryptos, setCryptos] = useState<Crypto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCoins()
      .then((data) => {
        setCryptos(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="min-w-full border-collapse bg-gray-200 dark:bg-gray-800 dark:text-gray-300 text-gray-700 rounded-lg overflow-hidden shadow-lg">
  <thead>
    <tr className="bg-gray-300 dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-sm">
      <th className="px-4 py-2 text-right">Rank</th>
      <th className="px-4 py-2 text-left">Name</th>
      <th className="px-4 py-2 text-right">Price</th>
      <th className="px-4 py-2 text-right">Market Cap</th>
      <th className="px-4 py-2 text-right">VWAP (24h)</th>
      <th className="px-4 py-2 text-right">Supply</th>
      <th className="px-4 py-2 text-right">Volume (24h)</th>
      <th className="px-4 py-2 text-right">Change (24h)</th>
    </tr>
  </thead>
  <tbody>
    {cryptos.map((crypto, index) => (
      <tr
        key={crypto.id}
        className={`${
          index % 2 === 0
            ? "bg-white dark:bg-gray-700"
            : "bg-gray-50 dark:bg-gray-600"
        } hover:bg-gray-100 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-300 text-sm`}
      >
        <td className="px-4 py-2 text-right">{crypto.rank}</td>
        <td className="px-4 py-2 text-right flex items-center gap-2">
          <img
            src={`https://assets.coincap.io/assets/icons/${crypto.symbol.toLowerCase()}@2x.png`}
            alt={`${crypto.name} logo`}
            className="w-6 h-6 rounded-full"
          />
          <span>{crypto.name}</span>
        </td>
        <td className="px-4 py-2 text-right">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(crypto.priceUsd)}
        </td>
        <td className="px-4 py-2 text-right">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(crypto.marketCapUsd)}
        </td>
        <td className="px-4 py-2 text-right">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(crypto.vwap24Hr)}
        </td>
        <td className="px-4 py-2 text-right">
          {new Intl.NumberFormat("en-US").format(crypto.supply)}
        </td>
        <td className="px-4 py-2 text-right">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(crypto.volumeUsd24Hr)}
        </td>
        <td
          className={`px-4 py-2 text-right ${
            crypto.changePercent24Hr > 0
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {crypto.changePercent24Hr}%
        </td>
      </tr>
    ))}
  </tbody>
</table>

      )}
    </div>
  );
}

export default CryptoList;
