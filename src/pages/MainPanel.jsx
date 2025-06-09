// src/pages/MainPanel.jsx
import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "../components/ThemeToggle";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../utils/auth";
import ThemedButton from "../components/ThemedButton";
import Sidebar from "../components/sidebar";


const MainPanel = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login", { replace: true });
  };

  const user = {
    name: "Juan Pérez",
    role: "admin",
    avatar: "/profile.jpg", // o una URL
  };

  const menuItems = [
    { label: "Dashboard", onClick: () => console.log("Dashboard") },
    { label: "Usuarios", onClick: () => console.log("Usuarios") },
    { label: "Productos", onClick: () => console.log("Productos") },
    { label: "Reportes", onClick: () => console.log("Reportes") },
    { label: "Configuración", onClick: () => console.log("Config") },
  ];

  return (
    <div className="flex" style={{ backgroundColor: theme.bg }}>
      <Sidebar user={user} menuItems={menuItems} onLogout={handleLogout} />
      <main className="flex-1 p-8 text-center" style={{ color: theme.text }}>
        <h1 className="text-3xl font-bold mb-4">Bienvenido al panel principal</h1>
        <p>Este es el contenido protegido luego de iniciar sesión.</p>
      </main>
    </div>
  );
};

export default MainPanel;
