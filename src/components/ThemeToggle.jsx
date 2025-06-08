// src/components/ThemeToggle.jsx
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 text-white bg-gray-800 rounded"
    >
      {isDark ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
    </button>
  );
};

export default ThemeToggle;
