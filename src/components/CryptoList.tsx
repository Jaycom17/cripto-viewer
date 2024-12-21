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
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Symbol</th>
              <th>Name</th>
              <th>Supply</th>
              <th>Max Supply</th>
              <th>Market Cap</th>
              <th>Volume (24h)</th>
              <th>Price</th>
              <th>Change (24h)</th>
              <th>VWAP (24h)</th>
            </tr>
          </thead>
          <tbody>
            {cryptos.map((crypto) => (
              <tr key={crypto.id}>
                <td>{crypto.rank}</td>
                <td>{crypto.symbol}</td>
                <td>{crypto.name}</td>
                <td>{crypto.supply}</td>
                <td>{crypto.maxSupply}</td>
                <td>{crypto.marketCapUsd}</td>
                <td>{crypto.volumeUsd24Hr}</td>
                <td>{crypto.priceUsd}</td>
                <td>{crypto.changePercent24Hr}</td>
                <td>{crypto.vwap24Hr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default CryptoList;
