import { useState, useEffect } from "react";

function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeEnabled =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(darkModeEnabled);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.classList.remove(isDarkMode ? "light-mode" : "dark-mode");
    htmlElement.classList.add(isDarkMode ? "dark-mode" : "light-mode");
  }, [isDarkMode]);

  return [isDarkMode, toggleDarkMode];
}

export default useDarkMode;
