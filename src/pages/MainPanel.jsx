// src/pages/MainPanel.jsx
import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "../components/ThemeToggle";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../utils/auth";
import ThemedButton from "../components/ThemedButton";

const MainPanel = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login", { replace: true });
  };

  return (
    <div
      className="min-h-screen p-8 items-center flex flex-col justify-center gap-4"
      style={{ backgroundColor: theme.bg, color: theme.text }}
    >
      <ThemeToggle />

      <h1 className="text-3xl font-bold mb-4">Bienvenido al panel principal</h1>
      <p>Este es el contenido protegido luego de iniciar sesión.</p>



    <ThemedButton onClick={handleLogout}>Cerrar sesión</ThemedButton>

    </div>
  );
};

export default MainPanel;
