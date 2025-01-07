import React from "react";
import { useLocation } from "react-router-dom";

function OrderDetailsPage() {
  const { state } = useLocation();
  const order = state?.order;

  if (!order) {
    return <div>Orden no encontrada.</div>;
  }

  return (
    <div className="container mt-4">
      <h1>Detalles de la Orden {order.id}</h1>
      <p><strong>Total:</strong> ${order.totalAmount}<br />
        <strong>Dirección de Entrega:</strong> {order.deliveryAddress}<br />
        <strong>Estado:</strong> {order.status}<br />
        <strong>Fecha:</strong> {order.image}</p>

      <h3>Productos en la Orden</h3>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <ul className="list-group">
          {order.items.map((item) => (
            <li
              key={item.id}
              className="list-group-item d-flex align-items-center custom-li"
            >
              <img src={item.image} alt={item.name} style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                marginRight: "15px",
              }} />
              <p>
                <strong>Producto:</strong> {item.name}<br />
                <strong>Cantidad:</strong> {item.quantity}<br />
                <strong>Precio unitario:</strong> ${item.price}<br />
                <strong>Total:</strong> ${item.price * item.quantity}
                <br />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default OrderDetailsPage;
