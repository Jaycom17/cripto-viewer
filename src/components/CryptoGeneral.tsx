import { Crypto } from "../interfaces/Crypto";

interface CryptoGeneralProps {
  crypto: Crypto | null;
}

function CryptoGeneral({ crypto }: CryptoGeneralProps) {
  return (
    <section className="flex flex-col md:flex-row gap-4 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
      {/* Rank */}
      <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md flex-1 text-center">
        <h2 className="text-sm text-gray-500 dark:text-gray-400">Rank</h2>
        <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          {crypto?.rank || "N/A"}
        </p>
      </div>

      {/* General Information */}
      <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md flex-1">
        <h1 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
          {crypto?.name} ({crypto?.symbol})
        </h1>
        <article>
          <h2 className="text-sm text-gray-500 dark:text-gray-400">Price (USD)</h2>
          <p className="text-2xl font-semibold text-green-500 dark:text-green-400">
            ${crypto?.priceUsd ? parseFloat(crypto.priceUsd).toFixed(2) : "N/A"}
          </p>
          <div className="mt-2">
            <h2 className="text-sm text-gray-500 dark:text-gray-400">24h Change</h2>
            <p
              className={`text-xl font-semibold ${
                crypto?.changePercent24Hr && parseFloat(crypto.changePercent24Hr) > 0
                  ? "text-green-500 dark:text-green-400"
                  : "text-red-500 dark:text-red-400"
              }`}
            >
              {crypto?.changePercent24Hr
                ? `${parseFloat(crypto.changePercent24Hr).toFixed(2)}%`
                : "N/A"}
            </p>
          </div>
        </article>
      </div>

      {/* Market Capitalization */}
      <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md flex-1 text-center">
        <h2 className="text-sm text-gray-500 dark:text-gray-400">Market Cap</h2>
        <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          ${crypto?.marketCapUsd
            ? (parseFloat(crypto.marketCapUsd) / 1e9).toFixed(2) + "B"
            : "N/A"}
        </p>
      </div>
    </section>
  );
}

export default CryptoGeneral;
