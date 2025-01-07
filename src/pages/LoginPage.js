import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";

function LoginPage({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log( email, password)
    if (!email || !password) {
      setFormError("Todos los campos son obligatorios.");
      return;
    }

    try {
      const response = await axiosInstance.post("/auth/login", {
        email,
        password,
      });
      const data = response.data;
      console.log('JRBP -> data:', data);

      if (data.token && data.userId) {
        localStorage.setItem("token", data.token);
        setUser({ email, id: data.userId });
        navigate("/");
      } else {
        setFormError("Correo o contraseña incorrectos");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setFormError("Error al iniciar sesión. Por favor, inténtalo nuevamente.");
    }
  };

  return (
    <div className="container">
      <h2>Iniciar sesión</h2>
      <form
        className="row g-3 needs-validation"
        onSubmit={handleLogin}
        noValidate
      >
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Correo electrónico
          </label>
          <input
            type="email"
            className={`form-control ${formError ? "is-invalid" : ""}`}
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {formError && <div className="invalid-feedback">{formError}</div>}
        </div>
        <div className="col-md-6">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className={`form-control ${formError ? "is-invalid" : ""}`}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {formError && <div className="invalid-feedback">{formError}</div>}
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Iniciar sesión
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
