import React from "react";
import AllRoutes from "./AllRoutes/RouteHandler";
import "./App.css";
import { AuthProvider } from "./Context/AuthContext";
import { ThemeProvider } from './Context/ThemeContext';
import { CartProvider } from './Context/CartContext';

function App() {
  return (
    <CartProvider>
      <ThemeProvider>
        <AuthProvider>
          {" "}
          <AllRoutes />
        </AuthProvider>
      </ThemeProvider>
    </CartProvider>
  );
}

export default App;
