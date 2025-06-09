import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ThemeToggle from "../components/ThemeToggle";
import { useTheme } from "../context/ThemeContext";
import ThemedButton from "../components/ThemedButton";
import ThemedInput from "../components/ThemedInput";

const LoginPage = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setFieldErrors({ email: "", password: "" });

    let hasError = false;
    const newErrors = { email: "", password: "" };

    if (!email.trim()) {
      newErrors.email = "El correo es obligatorio";
      hasError = true;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Formato de correo inválido";
      hasError = true;
    }

    if (!password.trim()) {
      newErrors.password = "La contraseña es obligatoria";
      hasError = true;
    }

    if (hasError) {
      setFieldErrors(newErrors);
      return;
    }

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
      className="min-h-screen flex items-center  justify-center"
      style={{ backgroundColor: theme.bg, color: theme.text }}
    >
      <div
        className="p-6 rounded shadow-md w-full max-w-md"
        style={{ backgroundColor: theme.bg2, color: theme.text }}
      >
        <div className="pb-4 flex flex-row align-super items-center justify-between">
          <h2 className="text-2xl font-bold ">Iniciar Sesión</h2>

          <ThemeToggle />
        </div>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          {fieldErrors.email && (
            <p className="text-red-500 text-sm -mt-2">{fieldErrors.email}</p>
          )}
          <ThemedInput
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />

          {fieldErrors.password && (
            <p className="text-red-500 text-sm -mt-2">{fieldErrors.password}</p>
          )}
          <ThemedInput
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />

          {error && <p className="text-red-600 text-center mt-2">{error}</p>}
          <ThemedButton type="submit">Iniciar sesión</ThemedButton>

        </form>
      </div>
    </div>
  );
};

export default LoginPage;
