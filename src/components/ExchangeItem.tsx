import { useNavigate } from "react-router-dom";

import { Exchange } from "../interfaces/Exchange";

interface ExchangeItemProps {
  exchange: Exchange;
  index: number;
}

function ExchangeItem({ exchange, index }: ExchangeItemProps) {

    const navigate = useNavigate();

  return (
    <tr
      className={`${
        index % 2 === 0
          ? "bg-white dark:bg-gray-700"
          : "bg-gray-50 dark:bg-gray-600"
      } hover:bg-gray-100 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-300 text-sm`}

        onClick={() => navigate(`/exchange/${exchange.exchangeId}`)}
    >
      <td className="px-4 py-2 text-right">{exchange.rank}</td>
      <td className="px-4 py-2 text-left">
        {exchange.name} ({exchange.exchangeId})
      </td>
      <td className="px-4 py-2 text-right">
        {exchange.tradingPairs}
      </td>
      <td className="px-4 py-2 text-right">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(exchange.volumeUsd)}
      </td>
      <td className="px-4 py-2 text-right">
      {parseFloat(exchange.percentTotalVolume).toFixed(4)}%
      </td>
    </tr>
  );
}

export default ExchangeItem;
