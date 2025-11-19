"use client"
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const THEME_KEY = "sma_theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string>(() => {
    try {
      return (localStorage.getItem(THEME_KEY) as string) || "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    // apply class to html element
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {}
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggle}
      className="bg-white dark:bg-gray-800 rounded-full w-7 h-7 flex items-center justify-center cursor-pointer bd-cl "
      title="Dark / Light mode"
    >
      {theme === "dark" ? (
        <FaSun className="text-yellow-400" size={16} />
      ) : (
        <FaMoon className="text-gray-600" size={16} />
      )}
    </button>
  );
}
