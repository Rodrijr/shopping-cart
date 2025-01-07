import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import userServices from "../services/userServices";
function RegisterPage({ setUser }) {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, lastname, address, birthDate, email, password, username: email };
    //guardar en backend
    localStorage.setItem("user", JSON.stringify(newUser));
    userServices.createUser(newUser);
    navigate("/");
  };

  return (
    <div className="container">
      <br/>
      <h2>Registro</h2>
      <br/>
      <br />

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Apellido</label>
          <input
            type="text"
            className="form-control"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Fecha de nacimiento</label>
           <input
            type="date"
            className="form-control"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            required
          />
        </div>
                <div className="mb-3">
          <label className="form-label">Direccion</label>
          <input
            type="text"
            className="form-control"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Registrarse</button>
      </form>
    </div>
  );
}

export default RegisterPage;
