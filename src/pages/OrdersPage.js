import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import orderService from "../services/orderService";

function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleOrderClick = (orderId) => {
    navigate(`/orders/${orderId}`);
  };
  const getOrders = async () => {
    try {
      const orders = await orderService.getUserOrders();
      console.log('JRBP -> orders:', orders);
      setOrders(orders)
    } catch (err) {
      console.error("Error al obtener ordenes de compra:", err);
      setError("No se pudo cargar ordenes de compra. Intenta nuevamente.");
    }
  }
  useEffect(() => {
    getOrders()
  }, []);
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
            <h3> ODC-{order.id}</h3>
            <p><strong>Total:</strong> ${order.totalAmount}</p>
            <p><strong>Estado:</strong> {order.status}</p>
            <p><strong>Dirección de Entrega:</strong> {order.deliveryAddress}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default OrdersPage;
