import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      coins: "Coins",
      exchanges: "Exchanges",
      rank: "Rank",
      name: "Name",
      price: "Price",
      market_cap: "Market Cap",
      vwap: "VWAP (24h)",
      supply: "Supply",
      volume: "Volume (24h)",
      change: "Change (24h)",
    },
  },
  es: {
    translation: {
      coins: "Monedas",
      exchanges: "Intercambios",
      rank: "Rango",
      name: "Nombre",
      price: "Precio",
      market_cap: "Capitalización de mercado",
      vwap: "VWAP (24h)",
      supply: "Suministro",
      volume: "Volumen (24h)",
      change: "Cambio (24h)",
    },
  },
  fr: {
    translation: {
      coins: "Pièces",
      exchanges: "Échanges",
      rank: "Rang",
      name: "Nom",
      price: "Prix",
      market_cap: "Capitalisation boursière",
      vwap: "VWAP (24h)",
      supply: "Offre",
      volume: "Volume (24h)",
      change: "Changement (24h)",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
