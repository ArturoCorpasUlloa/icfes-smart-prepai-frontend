// src/pages/PruebaDiagnostica.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const PruebaDiagnostica = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    alert("Sesión cerrada correctamente");
    navigate("/");
  };

  return (
    <>    
      <div className="container mt-5 p-4 border rounded shadow bg-light text-center">
        <h2 className="text-primary">Prueba Diagnóstica</h2>
        <p>Bienvenido a la prueba diagnóstica de Icfes Smart PrepAI.</p>
        <button className="btn btn-danger mt-3" onClick={handleLogout}>Cerrar Sesión</button>
      </div>
    </>
  );
};

export default PruebaDiagnostica;
