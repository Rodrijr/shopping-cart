import React, { useEffect, useState } from 'react';
import productService from '../services/productService';
import cartService from '../services/cartService';

function ProductList({ cart, addToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productService.getProducts();
        setProducts(data);
      } catch (error) {
        setError('Hubo un problema al cargar los productos.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  if (loading) {
    return <p>Cargando productos...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const handleAddToCart = async (product) => {
    try {
      console.log('JRBP -> cart1 :', cart);
      let cartItem = product;
      cartItem.quantity = 1;
      cartItem.productId = cartItem.id;
      addToCart(cartItem);

      await cartService.addToCart(cartItem);
    } catch (err) {
      console.error("Error al agregar el producto al carrito:", err);
    }
  };

  console.log('JRBP -> products:', products);
  return (
    <div className="container mt-4">
      <h1>Lista de Productos</h1>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4">
            <div className="card mb-4">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">
                  <strong>Precio:</strong> ${product.price}
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleAddToCart(product)}
                >
                  Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
