// src/App.jsx
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { routes } from "./routes";

function App() {
  return (
    <ThemeProvider>
      
       <RouterProvider router={routes} />
    </ThemeProvider>
  );
}

export default App;
