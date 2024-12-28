import { useState } from "react";
import { Link } from "react-router-dom";
import DarkLightMode from "./DarkLightMode";

function Header() {
  const [currentPage, setCurrentPage] = useState("Cryptos");

  const pages = [
    { name: "Cryptos", path: "/" },
    { name: "Exchanges", path: "/exchanges" },
  ];

  return (
    <header className="dark:bg-gray-800 bg-gray-300 text-white">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center gap-8">
          <div>
            <Link to={"/"}>
              <h1 className="text-xl font-bold">Crypto Tracker</h1>
            </Link>
            <p className="text-sm">
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
            <nav
              className="lg:block space-x-4"
            >
              {pages.map((page) => (
                <Link
                  to={page.path}
                  key={page.name}
                  className={`font-semibold hover:text-gray-400 ${
                    page.name === currentPage ? "text-gray-400" : ""
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
            <select name="lenguage" className="bg-transparent text-white rounded outline-none">
                <option className="text-gray-800 font-semibold" value="en">English</option>
                <option className="text-gray-800 font-semibold" value="es">Spanish</option>
            </select>
            <DarkLightMode />
        </div>
      </div>
    </header>
  );
}

export default Header;
