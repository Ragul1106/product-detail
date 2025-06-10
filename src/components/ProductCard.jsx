import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} className="product-card-image" />
        <div className="product-card-info">
          <h3>{product.title}</h3>
          <p className="price">${product.price.toFixed(2)}</p>
          <button className="view-details-btn">View Details</button>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;