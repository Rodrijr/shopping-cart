import React from 'react';
import { useParams } from 'react-router-dom';

function OrderDetails({ orders }) {
  const { orderId } = useParams();

  const order = orders.find((order) => order.id === orderId);
  if (!order) {
    return <div>Orden no encontrada</div>;
  }

  return (
    <div>
      <h1>Detalles de la Orden {order.id}</h1>
      <p><strong>Fecha:</strong> {order.date}</p>
      <p><strong>Dirección de entrega:</strong> {order.address}</p>
      <p><strong>Total:</strong> ${order.total}</p>

      <h2>Productos:</h2>
      <ul>
        {order.items.map((item) => (
          <li key={item.id}>
            <div>
              <img src={item.image} alt={item.name} style={{ width: '50px' }} />
              <strong>{item.name}</strong> - ${item.price} x {item.quantity}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderDetails;
