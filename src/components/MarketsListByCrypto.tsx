import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { getMarketsByCryptoId } from "../services/market.service";

import MarketItem from "./MarketItem";

import { Market } from "../interfaces/Market";

function MarketsListByCrypto({ cryptoId }: { cryptoId?: string }) {
  const [markets, setMarkets] = useState<Market[]>([]);
  const [loading, setLoading] = useState(true);

  const { t } = useTranslation();

  const fetchMarkets = async () => {
    try {
      const data = await getMarketsByCryptoId(cryptoId);
      setMarkets(data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMarkets();

    const interval = setInterval(() => {
      fetchMarkets();
    }, 10000);

    return () => clearInterval(interval);
  }, [cryptoId]);

  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <p>{t("loading")}...</p>
      ) : (
        <table className="min-w-full border-collapse bg-gray-200 dark:bg-gray-800 dark:text-gray-300 text-gray-700 rounded-lg overflow-hidden shadow-lg">
          <thead>
            <tr className="bg-gray-300 dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-sm">
              <th className="px-4 py-2 text-left">{t("exchange")}</th>
              <th className="px-4 py-2 text-right">{t("par")}</th>
              <th className="px-4 py-2 text-right">{t("price")}</th>
              <th className="px-4 py-2 text-right">{t("volume")}</th>
              <th className="px-4 py-2 text-right">{t("volumePercent")} %</th>
            </tr>
          </thead>
          <tbody>
            {markets.map((market, index) => (
              <MarketItem key={market.baseId} market={market} index={index} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default MarketsListByCrypto;
