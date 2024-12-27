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
    <div>
      <h1>Cryptos</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="min-w-full border-collapse border border-gray-200">
  <thead>
    <tr className="bg-gray-100 text-gray-700 text-sm">
      <th className="border border-gray-200 px-4 py-2 text-left">Rank</th>
      <th className="border border-gray-200 px-4 py-2 text-left">Symbol</th>
      <th className="border border-gray-200 px-4 py-2 text-left">Name</th>
      <th className="border border-gray-200 px-4 py-2 text-left">Supply</th>
      <th className="border border-gray-200 px-4 py-2 text-left">Max Supply</th>
      <th className="border border-gray-200 px-4 py-2 text-left">Market Cap</th>
      <th className="border border-gray-200 px-4 py-2 text-left">Volume (24h)</th>
      <th className="border border-gray-200 px-4 py-2 text-left">Price</th>
      <th className="border border-gray-200 px-4 py-2 text-left">Change (24h)</th>
      <th className="border border-gray-200 px-4 py-2 text-left">VWAP (24h)</th>
    </tr>
  </thead>
  <tbody>
    {cryptos.map((crypto, index) => (
      <tr
        key={crypto.id}
        className={`${
          index % 2 === 0 ? "bg-white" : "bg-gray-50"
        } hover:bg-gray-100 text-gray-700 text-sm`}
      >
        <td className="border border-gray-200 px-4 py-2">{crypto.rank}</td>
        <td className="border border-gray-200 px-4 py-2">{crypto.symbol}</td>
        <td className="border border-gray-200 px-4 py-2">{crypto.name}</td>
        <td className="border border-gray-200 px-4 py-2">{crypto.supply}</td>
        <td className="border border-gray-200 px-4 py-2">{crypto.maxSupply}</td>
        <td className="border border-gray-200 px-4 py-2">
          {crypto.marketCapUsd}
        </td>
        <td className="border border-gray-200 px-4 py-2">
          {crypto.volumeUsd24Hr}
        </td>
        <td className="border border-gray-200 px-4 py-2">{crypto.priceUsd}</td>
        <td className="border border-gray-200 px-4 py-2">
          {crypto.changePercent24Hr}
        </td>
        <td className="border border-gray-200 px-4 py-2">{crypto.vwap24Hr}</td>
      </tr>
    ))}
  </tbody>
</table>
      )}
    </div>
  );
}

export default CryptoList;
