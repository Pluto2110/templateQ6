import React from 'react';

const Product = ({ product, onAddToCart }) => (
  <div className="product">
    <img src={product.image} alt={product.name} />
    <h2>{product.name}</h2>
    <p>{product.description}</p>
    <div className="product-footer">
      <span className="price">${product.price}</span>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  </div>
);

export default Product;
