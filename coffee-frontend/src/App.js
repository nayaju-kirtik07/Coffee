import React from "react";
import AllRoutes from "./AllRoutes/RouteHandler";
import "./App.css";
import { AuthProvider } from "./Context/AuthContext";
import { ThemeProvider } from './Context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        {" "}
        <AllRoutes />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
