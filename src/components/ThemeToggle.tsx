"use client";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const THEME_KEY = "sma_theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // On mount, sync theme state with what the inline script applied to the DOM
    // This ensures the icon always matches the current background theme
    try {
      const storedTheme = localStorage.getItem(THEME_KEY) || "light";
      const isDarkMode = document.documentElement.classList.contains("dark");

      // Trust the DOM state (set by inline script) over stored value if they differ
      const actualTheme = isDarkMode ? "dark" : "light";
      setTheme(actualTheme);

      // If stored value was wrong, correct it
      if (storedTheme !== actualTheme) {
        localStorage.setItem(THEME_KEY, actualTheme);
      }
    } catch {}
    setMounted(true);
  }, []);

  useEffect(() => {
    // Apply theme changes to DOM
    if (!mounted) return;
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {}
  }, [theme, mounted]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        disabled
        className="bg-white dark:bg-gray-800 rounded-full w-7 h-7 flex items-center justify-center cursor-pointer bd-cl opacity-50"
        title="Dark / Light mode"
      >
        <FaMoon className="text-gray-600" size={16} />
      </button>
    );
  }

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
