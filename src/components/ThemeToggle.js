import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ margin: "10px 0" }}>
      <p>Şu anki tema: <strong>{theme}</strong></p>
      <button onClick={() => toggleTheme("light")}>Light Tema</button>
      <button onClick={() => toggleTheme("dark")}>Dark Tema</button>
      <button onClick={() => toggleTheme("system")}>Sistem Teması</button>
    </div>
  );
};

export default ThemeToggle;
