// src/components/ThemedButton.jsx
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const ThemedButton = ({
  children,
  onClick,
  type = "button",
  className = "",
}) => {
  const { theme } = useTheme();
  const [hovered, setHovered] = useState(false);

  const style = {
    backgroundColor: hovered ? theme.bg5 : theme.bg4,
    color: theme.text,
    border: "none",
    transition: "background-color 0.3s ease",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={style}
      className={`rounded px-4 py-2 ${className}`}
    >
      {children}
    </button>
  );
};

export default ThemedButton;
