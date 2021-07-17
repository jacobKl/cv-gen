import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContextProvider";
import { StyledThemeToggler } from "./ThemeToggler.styled.js";

function ThemeToggler() {
  const { darkMode, switchTheme } = useContext(ThemeContext);
  return <StyledThemeToggler mode={darkMode} onClick={switchTheme} />;
}

export default ThemeToggler;
