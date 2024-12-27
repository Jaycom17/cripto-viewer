import { useState } from "react";
import DarkLightMode from "./DarkLightMode";

function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return (
        <header className="bg-gray-800 text-white">
        <div className="container mx-auto flex justify-between items-center p-4">
            <div>
            <h1 className="text-xl font-bold">Crypto Tracker</h1>
            </div>
            <div>
            <button
                className="block lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
                ) : (
                <svg
                    xmlns="http://www.w3.org/
                    2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                    />
                </svg>
                )}
            </button>
            <nav
                className={`${
                isMenuOpen ? "block" : "hidden"
                } lg:block space-x-4`}
            >
                <a href="#" className="hover:underline">
                Home
                </a>
                <a href="#" className="hover:underline">
                Cryptos
                </a>
                <DarkLightMode />
            </nav>
            </div>
        </div>
        </header>
    );
}

export default Header;