import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import cartService from "../services/cartService";

function CartPage({ user, defaultAddress, confirmOrder }) {
  const [cart, setCart] = useState([]);
  const [address, setAddress] = useState(defaultAddress);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const data = await cartService.getCart(user.id);
        setCart(data.items);
      } catch (err) {
        console.error("Error al obtener el carrito:", err);
        setError("No se pudo cargar el carrito. Intenta nuevamente.");
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
  }, [user.id]);

  const handleRemoveFromCart = async (itemId) => {
    try {
      const updatedCart = cart.filter((item) => item.id !== itemId);
      setCart(updatedCart);
      await cartService.updateCart({ userId: user.id, items: updatedCart });
    } catch (err) {
      console.error("Error al actualizar el carrito:", err);
      setError("No se pudo actualizar el carrito. Intenta nuevamente.");
    }
  };

  const handleConfirmOrder = () => {
    if (!address.trim()) {
      setError("Por favor, ingrese una dirección de entrega.");
      return;
    }
    confirmOrder(address);
    navigate("/orders");
  };

  if (loading) {
    return <p>Cargando el carrito...</p>;
  }

  if (error) {
    return <p className="text-danger">{error}</p>;
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

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
                  onClick={() => handleRemoveFromCart(item.id)}
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
            <button
              className="btn btn-primary mt-3"
              onClick={handleConfirmOrder}
            >
              Confirmar Compra
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
