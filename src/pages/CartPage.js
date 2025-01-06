import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function CartPage({ cart, removeFromCart, confirmOrder, defaultAddress }) {
  const [address, setAddress] = useState(defaultAddress);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const navigate = useNavigate();

  const handleConfirmOrder = (address) => {
    if (!address.trim()) {
      alert("Por favor, ingrese una dirección de entrega.");
      return;
    }
    confirmOrder(address);
    navigate(`/orders`);
  };

  return (
    <div className="container mt-4">
      <h1>Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <ul className="list-group">
            {cart.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex align-items-center custom-li"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    marginRight: "15px",
                  }}
                />
                <div style={{ flexGrow: 1 }}>
                  <h5>{item.name}</h5>
                  <p>Cantidad: {item.quantity}</p>
                  <p>Precio: ${item.price}</p>
                  <p>Total: ${item.price * item.quantity}</p>
                </div>
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(item.id)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <h4>Total a Pagar: ${total}</h4>
            <div className="form-group mt-3">
              <label htmlFor="address">Dirección de Entrega:</label>
              <input
                id="address"
                className="form-control"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
              <button className="btn btn-primary" onClick={() => handleConfirmOrder(defaultAddress)}>Confirmar Compra</button>

          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
