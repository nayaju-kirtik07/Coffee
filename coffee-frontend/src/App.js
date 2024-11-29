import React from "react";
import AllRoutes from "./AllRoutes/RouteHandler";
import "./App.css";
import { AuthProvider } from "./Context/AuthContext";

function App() {
  return (
    <AuthProvider>
      {" "}
      <AllRoutes />
    </AuthProvider>
  );
}

export default App;
