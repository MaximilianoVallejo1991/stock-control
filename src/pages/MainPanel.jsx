// src/pages/MainPanel.jsx
import { useTheme } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../utils/auth";
import Sidebar from "../components/sidebar";
import SectionCard from "../components/SectionCard";
import {
  Home,
  User,
  Box,
  ShoppingCart,
  Users,
  Building2,
  LayoutGrid,
} from "lucide-react";



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
    { label: "Inicio", onClick: () => navigate("/home") },
    { label: "Panel Principal", onClick: () => navigate("/MainPanel") },
    { label: "Reportes", onClick: () => navigate("/Reports") },
    { label: "Calculadora", onClick: () => navigate("/Calculator") },
    { label: "Mensajes", onClick: () => navigate("/Messages") },
    { label: "Perfil", onClick: () => navigate("Profile") },
  ];

  const sections = [

    { label: "Clientes", icon: Users, route: "/clients" },
    { label: "Empleados", icon: User, route: "/employer" },
    { label: "Proveedores", icon: Building2, route: "/suppliers" },
    { label: "Categorías", icon: LayoutGrid, route: "/categories" },
    { label: "Productos", icon: Box, route: "/products" },
    { label: "Ventas", icon: ShoppingCart, route: "/sell" },
  ];


  return (
    <main className="flex" style={{ backgroundColor: theme.bg }}>

      <Sidebar user={user} menuItems={menuItems} onLogout={handleLogout} />

      <div
        className="min-h-screen w-full p-8 flex justify-center items-center flex-col gap-6"
        style={{ backgroundColor: theme.bg, color: theme.text }}
      >
        <div className="w-full flex justify-between items-center max-w-4xl">
          <h1 className="text-3xl font-bold">Panel principal</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl h-3/5">
          {sections.map((section) => (
            <SectionCard
              key={section.route}
              label={section.label}
              icon={section.icon}
              route={section.route}
              
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default MainPanel;
