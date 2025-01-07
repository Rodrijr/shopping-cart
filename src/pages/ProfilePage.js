import React, { useState, useEffect } from "react";

function ProfilePage() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")) || {};
    setName(user.name || "");
    setLastName(user.lastName || "");
    setAddress(user.address || "");
    setBirthDate(user.birthDate || "");
    setEmail(user.email || "");
    setPassword(user.password || "");
  }, []);

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    const updatedUser = { name, lastName, address, birthDate, email, password };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    alert("Perfil actualizado exitosamente!");
  };

  return (
    <div className="container mt-4">
      <h2>Mi Perfil</h2>
      <form onSubmit={handleProfileUpdate}>
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
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Dirección</label>
          <input
            type="text"
            className="form-control"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Fecha de Nacimiento</label>
          <input
            type="date"
            className="form-control"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo Electrónico</label>
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
        <button type="submit" className="btn btn-primary">Guardar Cambios</button>
      </form>
    </div>
  );
}

export default ProfilePage;
