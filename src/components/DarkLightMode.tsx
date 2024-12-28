import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

function DarkLightMode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="flex items-center justify-center p-6">
      <div className="relative flex items-center">
        <div
          onClick={() => setDarkMode(!darkMode)}
          className={`cursor-pointer w-14 h-8 flex items-center rounded-full p-1 transition-all duration-300 ${
            darkMode ? "bg-gray-700" : "bg-gray-300"
          }`}
        >
          <div
            className={`w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
              darkMode
                ? "translate-x-6 bg-gray-200"
                : "translate-x-0 bg-gray-800"
            }`}
          />
        </div>
        <div className="absolute left-0 transform -translate-x-7">
          <SunIcon
            className={`w-5 h-5 text-gray-200 ${
              darkMode ? "opacity-0" : "opacity-100"
            } transition-opacity duration-300`}
          />
        </div>
        <div className="absolute right-0 transform translate-x-7">
          <MoonIcon
            className={`w-5 h-5 text-gray-800 ${
              darkMode ? "opacity-100" : "opacity-0"
            } transition-opacity duration-300`}
          />
        </div>
      </div>
    </div>
  );
}

export default DarkLightMode;