import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ThemeToggle from "../components/ThemeToggle";
import { useTheme } from "../context/ThemeContext";
import ThemedButton from "../components/ThemedButton";

const LoginPage = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:3000/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      navigate("/mainPanel");
    } catch (err) {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: theme.bg, color: theme.text }}
    >
      <div
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
        style={{ backgroundColor: theme.bg2, color: theme.text }}
      >
        <ThemeToggle />
        <h2 className="text-2xl font-bold mb-6">Iniciar Sesión</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            className="p-2 rounded border"
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="p-2 rounded border"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ThemedButton type="submit">Iniciar sesión</ThemedButton>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
