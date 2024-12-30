import { useState } from "react";
import { Link } from "react-router-dom";
import DarkLightMode from "./DarkLightMode";
import { useTranslation } from "react-i18next";

function Header() {
  const [currentPage, setCurrentPage] = useState("Cryptos");

  const { i18n, t } = useTranslation();

  const handleLanguageChange = (e: Event | any) => {
    const selectedLanguage = e.target.value;
    console.log(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  };

  const pages = [
    { name: t("coins"), path: "/" },
    { name: t("exchanges"), path: "/exchanges" },
  ];

  return (
    <header className="dark:bg-gray-900 bg-gray-300 text-white">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center gap-8">
          <div>
            <Link to={"/"}>
              <h1 className="text-xl font-bold text-gray-900 dark:text-gray-200">
                Crypto Tracker
              </h1>
            </Link>
            <p className="text-sm text-gray-900 dark:text-gray-200">
              by{" "}
              <a
                className="hover:underline"
                href="https://www.coincap.io/"
                target="_blank"
              >
                coincap.io
              </a>
            </p>
          </div>

          <div>
            <nav className="lg:block space-x-4">
              {pages.map((page) => (
                <Link
                  to={page.path}
                  key={page.name}
                  className={`font-semibold hover:text-gray-600 dark:hover:text-gray-400 text-gray-900 dark:text-gray-200 ${
                    page.name === currentPage
                      ? "dark:text-gray-400 text-gray-600"
                      : ""
                  }`}
                  onClick={() => setCurrentPage(page.name)}
                >
                  {page.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <select
            onChange={handleLanguageChange}
            name="lenguage"
            className="bg-transparent rounded outline-none text-gray-900 dark:text-gray-200"
          >
            <option className="text-gray-800 font-semibold" value="en">
              English
            </option>
            <option className="text-gray-800 font-semibold" value="es">
              Español
            </option>
            <option className="text-gray-800 font-semibold" value="fr">
              Français
            </option>
          </select>
          <DarkLightMode />
        </div>
      </div>
    </header>
  );
}

export default Header;
