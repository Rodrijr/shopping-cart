import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function OrdersPage({ orders }) {
  const navigate = useNavigate();

  const handleOrderClick = (orderId) => {
    navigate(`/orders/${orderId}`); // Redirige a la página de detalles de la orden
  };

  return (
    <div className="container mt-4">
      <h1>Órdenes de Compra</h1>
      <div>
        {orders.map((order) => (
          <div
            key={order.id}
            onClick={() => handleOrderClick(order.id)}
            style={{ border: "1px solid #ddd", padding: "10px", margin: "10px", cursor: "pointer" }}
          >
            <h3>{order.id}</h3>
            <p><strong>Total:</strong> ${order.total}</p>
            <p><strong>Estado:</strong> {order.status}</p>
            <p><strong>Dirección de Entrega:</strong> {order.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrdersPage;
