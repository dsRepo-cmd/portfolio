import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";

function ThemeSwitcher() {
  const [isDark, setDark] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme === "dark";
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      return prefersDark;
    }
  });

  const toggleTheme = () => {
    const newTheme = !isDark;
    setDark(newTheme);
    document.body.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

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
