import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import CryptoItem from "./CryptoItem";

import { getCoins } from "../services/coins.service";

import { Crypto } from "../interfaces/Crypto";

function CryptoList() {
  const [cryptos, setCryptos] = useState<Crypto[]>([]);
  const [loading, setLoading] = useState(true);

  const { t } = useTranslation();

  const fetchCryptos = async () => {
    try {
      const data = await getCoins();
      setCryptos(data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCryptos();

    const interval = setInterval(() => {
      console.log("Fetching latest crypto data...");
      fetchCryptos();
    }, 5000);

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
              <th className="px-4 py-2 text-right">{t("price")}</th>
              <th className="px-4 py-2 text-right">{t("market_cap")}</th>
              <th className="px-4 py-2 text-right">{t("vwap")}</th>
              <th className="px-4 py-2 text-right">{t("supply")}</th>
              <th className="px-4 py-2 text-right">{t("volume")}</th>
              <th className="px-4 py-2 text-right">{t("change")}</th>
            </tr>
          </thead>
          <tbody>
            {cryptos.map((crypto, index) => (
              <CryptoItem key={crypto.id} crypto={crypto} index={index} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default CryptoList;
