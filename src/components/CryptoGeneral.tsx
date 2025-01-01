import { Crypto } from "../interfaces/Crypto";

interface CryptoGeneralProps {
  crypto: Crypto | null;
}

function CryptoGeneral({ crypto }: CryptoGeneralProps) {
  return (
    <section className="flex">
      {/** Rank */}
      <div>
        <h2>Rank: {crypto?.rank}</h2>
      </div>
      <div>
        <h1>
          {crypto?.name} ({crypto?.symbol})
        </h1>
        <article>
          <h2>{crypto?.priceUsd}</h2>
          <div>
            <h2>{crypto?.changePercent24Hr}</h2>
          </div>
        </article>
      </div>
      <div>
          <h2>Capitalización del mercado</h2>
          <h2>{crypto?.marketCapUsd}</h2>
        </div>
    </section>
  );
}

export default CryptoGeneral;
