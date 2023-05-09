import { createContext, useEffect, useState } from "react";
import { themes } from "../constants";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    switch (theme) {
      case themes.light:
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        break;
      case themes.dark:
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        break;

      default:
        console.log("sorry theme not available");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
