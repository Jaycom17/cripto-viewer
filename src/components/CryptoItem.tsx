import { useNavigate } from "react-router-dom";

import { Crypto } from "../interfaces/Crypto";

interface CryptoItemProps {
  crypto: Crypto;
  index: number;
}

function CryptoItem({ crypto, index }: CryptoItemProps) {

  const navigate = useNavigate();

  return (
    <tr
      className={`${
        index % 2 === 0
          ? "bg-white dark:bg-gray-700"
          : "bg-gray-50 dark:bg-gray-600"
      } hover:bg-gray-100 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-300 text-sm cursor-pointer`}

      onClick={() => navigate(`/crypto/${crypto.id}`)}
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
        }).format(parseFloat(crypto.priceUsd))}
      </td>
      <td className="px-4 py-2 text-right">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(parseFloat(crypto.marketCapUsd))}
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
          parseFloat(crypto.changePercent24Hr) > 0
            ? "text-green-500"
            : "text-red-500"
        }`}
      >
        {parseFloat(crypto.changePercent24Hr).toFixed(2)}%
      </td>
    </tr>
  );
}

export default CryptoItem;
