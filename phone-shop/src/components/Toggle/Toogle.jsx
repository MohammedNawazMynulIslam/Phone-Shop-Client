import { useState } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="text-center">
      <button
        className="btn btn-circle bg-black text-blue-600 font-extrabold "
        onClick={toggleDarkMode}
      >
        Dark
      </button>
    </div>
  );
};

export default DarkModeToggle;
