import MoonIcon from "@icons/moon.svg?react";
import SunIcon from "@icons/sun.svg?react";
import { useDarkStore } from "@store/dark-store";
import { useEffect } from "react";

export function DarkmodeToggle() {
  const { darkMode, toggleDarkMode } = useDarkStore();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={toggleDarkMode}
      className="text-2xl cursor-pointer mr-auto"
    >
      {darkMode ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
