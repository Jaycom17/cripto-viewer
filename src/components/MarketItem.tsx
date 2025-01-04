import { Market } from "../interfaces/Market";

interface MarketItemProps {
  market: Market;
  index: number;
}

function MarketItem({ market, index }: MarketItemProps) {

  return (
    <tr
      className={`${
        index % 2 === 0
          ? "bg-white dark:bg-gray-700"
          : "bg-gray-50 dark:bg-gray-600"
      } hover:bg-gray-100 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-300 text-sm`}
    >
      <td className="px-4 py-2 text-right flex items-center gap-2">
        {market.exchangeId}
      </td>
      <td className="px-4 py-2 text-right">
        {market.baseSymbol}/{market.quoteSymbol}
      </td>
      <td className="px-4 py-2 text-right">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(market.priceUsd)}
      </td>
      <td className="px-4 py-2 text-right">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(market.volumeUsd24Hr)}
      </td>
      <td
        className={`px-4 py-2 text-right ${
          parseFloat(market.volumePercent) > 0
            ? "text-green-500"
            : "text-red-500"
        }`}
      >
        {parseFloat(market.volumePercent).toFixed(2)}%
      </td>
    </tr>
  );
}

export default MarketItem;
