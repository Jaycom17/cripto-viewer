import { useState, useEffect } from 'react';

function DarkLightMode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
  }, [darkMode]);

  return (
    <div>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <div className='w-fit h-fit bg-white dark:bg-gray-500'>
        <p className='text-black dark:text-white'>Hello, World!</p>   
      </div>
    </div>
  );
}

export default DarkLightMode;