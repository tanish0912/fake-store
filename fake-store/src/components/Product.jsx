import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import './Product.css';

function Product({ product }) {
  const { addToCart, getCartItemCount } = useContext(ShopContext);
  const cartItemCount = getCartItemCount(product.id);
  
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-category">{product.category}</p>
        <div className="product-price-rating">
          <span className="product-price">₹{(product.price * 83).toFixed(2)}</span>
          <div className="product-rating">
            <span className="rating-value">{product.rating.rate}</span>
            <span className="rating-star">★</span>
            <span className="rating-count">({product.rating.count})</span>
          </div>
        </div>
        <button 
          className="btn product-add-btn" 
          onClick={() => addToCart(product.id)}
        >
          Add to Cart {cartItemCount > 0 && `(${cartItemCount})`}
        </button>
      </div>
    </div>
  );
}

export default Product;
