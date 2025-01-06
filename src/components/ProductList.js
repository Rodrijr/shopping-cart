import React, { useEffect, useState } from 'react';

function ProductList({ addToCart }) {
  const [products, setProducts] = useState([
    {
      "id": 1,
      "name": "Camiseta Deportiva",
      "price": 20,
      "description": "Camiseta para deportes de alta calidad.",
      "image": "https://ae-pic-a1.aliexpress-media.com/kf/S3fda2bfcb3a841e69e32936c4628dae7S.jpg_960x960q75.jpg_.avif"
    },
    {
      "id": 2,
      "name": "Zapatillas Running",
      "price": 50,
      "description": "Zapatillas ideales para correr.",
      "image": "https://ae-pic-a1.aliexpress-media.com/kf/H77848dc63a82438cbe93f0bdae2da332S.jpg_960x960q75.jpg_.avif"
    },
    {
      "id": 2,
      "name": "Zapatillas Running",
      "price": 50,
      "description": "Zapatillas ideales para correr.",
      "image": "https://ae-pic-a1.aliexpress-media.com/kf/H77848dc63a82438cbe93f0bdae2da332S.jpg_960x960q75.jpg_.avif"
    },
    {
      "id": 2,
      "name": "Zapatillas Running",
      "price": 50,
      "description": "Zapatillas ideales para correr.",
      "image": "https://ae-pic-a1.aliexpress-media.com/kf/H77848dc63a82438cbe93f0bdae2da332S.jpg_960x960q75.jpg_.avif"
    },
    {
      "id": 2,
      "name": "Zapatillas Running",
      "price": 50,
      "description": "Zapatillas ideales para correr.",
      "image": "https://ae-pic-a1.aliexpress-media.com/kf/H77848dc63a82438cbe93f0bdae2da332S.jpg_960x960q75.jpg_.avif"
    },
    {
      "id": 2,
      "name": "Zapatillas Running",
      "price": 50,
      "description": "Zapatillas ideales para correr.",
      "image": "https://ae-pic-a1.aliexpress-media.com/kf/H77848dc63a82438cbe93f0bdae2da332S.jpg_960x960q75.jpg_.avif"
    }
  ]
);

 /* useEffect(() => {
    fetch('/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);
*/
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
                  onClick={() => addToCart(product)}
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
