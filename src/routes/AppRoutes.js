import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import OrdersPage from "../pages/OrdersPage";

function AppRoutes({ cart, orders, removeFromCart }) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/orders" element={<OrdersPage orders={orders} />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
