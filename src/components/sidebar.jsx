// src/components/Sidebar.jsx
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { FaBars } from "react-icons/fa";
import ThemedButton from "./ThemedButton";
import ThemeToggle from "./ThemeToggle";

const Sidebar = ({ user, menuItems = [], onLogout }) => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`h-screen transition-all duration-300 flex flex-col justify-between ${
        isOpen ? "w-64" : "w-20"
      }`}
      style={{ backgroundColor: theme.bg2, color: theme.text }}
    >
      {/* Header */}
      <div>
        <div className="flex items-center justify-between p-4">
          {isOpen && <span className="font-bold text-lg">Panel</span>}
          <button onClick={() => setIsOpen(!isOpen)}>
            <FaBars size={20} />
          </button>
        </div>

        {/* Perfil */}
        <div className="flex flex-col items-center p-4 gap-2">
          <img
            src={user.avatar || "/default-avatar.png"}
            alt="Perfil"
            className="w-16 h-16 rounded-full"
          />
          {isOpen && (
            <>
              <p className="font-semibold">{user.name}</p>
              <p className="text-sm italic">{user.role}</p>
            </>
          )}
        </div>

        {/* Menú */}
        <nav className="px-4 flex flex-col gap-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={item.onClick}
              className="text-left hover:underline"
            >
              {isOpen ? item.label : item.icon}
            </button>
          ))}
        </nav>
      </div>

      {/* Footer: Toggle + Logout */}
      <div className={`transition-all duration-50 ${isOpen ? "opacity-100 w-full" : "opacity-0 w-0 overflow-hidden"} flex flex-col gap-2 p-6`}>
 
        <ThemeToggle />
        <ThemedButton onClick={onLogout}>Cerrar sesión</ThemedButton>
      </div>
    </div>
  );
};

export default Sidebar;
