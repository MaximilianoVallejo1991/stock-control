import { jwtDecode } from "jwt-decode"; // ✅ Correcto

export const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  if (!token) return false;

  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp > currentTime;
  } catch (err) {
    return false;
  }
};

export const logoutUser = () => {
  localStorage.removeItem("token");
};