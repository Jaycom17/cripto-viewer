export interface Exchange {
  exchangeId: string;
  name: string;
  rank: string;
  percentTotalVolume: string;
  volumeUsd: number;
  tradingPairs: string;
  socket: boolean;
  exchangeUrl: string;
  updated: number;
}
