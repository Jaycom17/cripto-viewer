export interface Crypto {
  id: string;
  rank: number;
  symbol: string;
  name: string;
  supply: number;
  maxSupply: number;
  marketCapUsd: string;
  volumeUsd24Hr: number;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: number;
}
