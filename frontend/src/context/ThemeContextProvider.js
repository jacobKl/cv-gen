import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { themes } from "../GlobalStyle";

export const ThemeContext = React.createContext();

function ThemeContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const switchTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, switchTheme }}>
      <ThemeProvider theme={darkMode ? themes.dark : themes.light}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
