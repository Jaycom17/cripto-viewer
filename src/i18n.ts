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
      tradingPairs: "Trading pairs",
      percentTotalVolume: "Percent of total volume",
      Error404: "Error 404",
      Error404Title: "Page not found",
      Error404Message: "Sorry, the page you are looking for does not exist or has been moved.",
      Error404Back: "Go back",
      Error404Home: "Back to home",
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
      tradingPairs: "Pares de intercambio",
      percentTotalVolume: "Porcentaje del volumen total",
      Error404: "Error 404",
      Error404Title: "Página no encontrada",
      Error404Message: "Lo sentimos, la página que buscas no existe o ha sido movida.",
      Error404Back: "Volver",
      Error404Home: "Volver al inicio",
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
      tradingPairs: "Paires de trading",
      percentTotalVolume: "Pourcentage du volume total",
      Error404: "Erreur 404",
      Error404Title: "Page non trouvée",
      Error404Message: "Désolé, la page que vous recherchez n'existe pas ou a été déplacée.",
      Error404Back: "Retour",
      Error404Home: "Retour à la page d'accueil",
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
