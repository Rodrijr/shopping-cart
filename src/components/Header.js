import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ user, logout }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Shopping Cart
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="d-flex ml-auto">

          {user ? (
            <>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Productos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">
                    Carrito
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/orders">
                    Ordenes de compra
                  </Link>
                </li>
              </ul>
              <Link className="btn btn-outline-success me-2" to="/profile">
                Ver Perfil
              </Link>
              <button className="btn btn-outline-danger" onClick={logout}>
                Cerrar sesión
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-outline-primary me-2" to="/login">
                Iniciar sesión
              </Link>
              <Link className="btn btn-outline-secondary" to="/register">
                Registrarse
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
