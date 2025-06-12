import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";

const SectionCard = ({ label, icon: Icon, route }) => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={() => navigate(route)}
      className="cursor-pointer flex items-center gap-4 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 w-auto max-w-xs"
      style={{ backgroundColor: hovered ? theme.bg5 : theme.bg2, color: theme.text }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Icon size={28} />
      <span className="text-lg font-semibold">{label}</span>
    </div>
  );
};

export default SectionCard;
