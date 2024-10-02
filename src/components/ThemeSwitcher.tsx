import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";

function ThemeSwitcher() {
  const [isDark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!isDark);
    document.body.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggleTheme}
      id="theme-toggle"
      title="Toggle light & dark"
      aria-label="Switch theme"
      aria-live="polite"
    >
      {isDark ? <MdWbSunny size={24} /> : <FaMoon size={20} />}
    </button>
  );
}

export default ThemeSwitcher;
