import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Login = () => {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("https://icfes-smart-prepai-backend-production.up.railway.app/api/users/login", {
            correo,
            contrasena,
        });

        console.log("Respuesta del backend:", response.data);

        localStorage.setItem("token", response.data.token);
        alert("Inicio de sesión exitoso");
        navigate("/prueba-diagnostica");
    } catch (error) {
        console.error("Error en el login:", error.response ? error.response.data : error.message);
        alert(error.response?.data?.message || "Error en el login");
    }
};

  
  return (
    <>
      
      <div className="container mt-5">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Correo</label>
            <input type="email" className="form-control" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input type="password" className="form-control" value={contrasena} onChange={(e) => setContrasena(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-success">Iniciar Sesión</button>
        </form>
      </div>
    </>
  );
};

export default Login;
