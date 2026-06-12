import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("portfolio_lang") || "en";
  });
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio_theme") || "dark";
  });

  useEffect(() => {
    localStorage.setItem("portfolio_lang", language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem("portfolio_theme", theme);
    if (theme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [theme]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "vi" : "en"));
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
