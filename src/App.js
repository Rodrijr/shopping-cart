import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartPage from './pages/CartPage';
import OrdersPage from './pages/OrdersPage';
import OrderDetailsPage from './pages/OrderDetailsPage';
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  const [showToast, setShowToast] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Decodificar el JWT o hacer un llamada a backend para obtener los datos del usuario
      setUser({ username: "Test User", email: "test@example.com" });
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };


  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [userProfile] = useState({
    name: "Juan Pérez",
    defaultAddress: "Calle Falsa 123, Ciudad",
  });
  const notify = (productName) => {

  };
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    notify(product.name);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const confirmOrder = (address) => {
    if (cart.length === 0) {
      alert("No hay productos en el carrito.");
      return;
    }

    const newOrder = {
      id: `ORD-${orders.length + 1}`,
      items: [...cart],
      total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
      address,
      date: new Date().toLocaleString(),
      status: 'Pendiente'
    };

    setOrders((prevOrders) => [...prevOrders, newOrder]);
    setCart([]);
    alert("Compra confirmada exitosamente.");
  };

  return (
    <Router>
      <Header user={user} logout={logout} />
      <Routes>
        <Route path="/" element={<ProductList addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              removeFromCart={removeFromCart}
              confirmOrder={confirmOrder}
              defaultAddress={userProfile.defaultAddress}
            />
          }
        />
        <Route path="/orders" element={<OrdersPage orders={orders} />} />
        <Route path="/orders/:orderId" element={<OrderDetailsPage orders={orders} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
        <Route path="/profile" element={<ProfilePage user={user} />} />
      </Routes>
    </Router>
  );
}

export default App;
