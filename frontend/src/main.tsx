import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./components/Login"; // Importation de la page Login
import "./index.css"; // Assurez-vous d'avoir Tailwind ou CSS importé

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);
