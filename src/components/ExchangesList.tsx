import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import ExchangeItem from "./ExchangeItem";

import { getExchanges } from "../services/exchages.service";

import { Exchange } from "../interfaces/Exchange";

function ExchangesList() {
  const [exchanges, setExchanges] = useState<Exchange[]>([]);
  const [loading, setLoading] = useState(true);

  const { t } = useTranslation();

  const fetchExchanges = async () => {
    try {
      const data = await getExchanges();
      setExchanges(data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchExchanges();

    const interval = setInterval(() => {
      fetchExchanges();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <p>{t("loading")}...</p>
      ) : (
        <table className="min-w-full border-collapse bg-gray-200 dark:bg-gray-800 dark:text-gray-300 text-gray-700 rounded-lg overflow-hidden shadow-lg">
          <thead>
            <tr className="bg-gray-300 dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-sm">
              <th className="px-4 py-2 text-right">{t("rank")}</th>
              <th className="px-4 py-2 text-left">{t("name")}</th>
              <th className="px-4 py-2 text-right">{t("tradingPairs")}</th>
              <th className="px-4 py-2 text-right">{t("volume")}</th>
              <th className="px-4 py-2 text-right">{t("percentTotalVolume")}</th>
            </tr>
          </thead>
          <tbody>
            {exchanges.map((exchange, index) => (
              <ExchangeItem key={exchange.exchangeId} exchange={exchange} index={index} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ExchangesList;
