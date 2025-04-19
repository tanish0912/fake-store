import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import './Product.css';

function Product({ product }) {
  const { addToCart, getCartItemCount, addToWishlist, removeFromWishlist, isInWishlist } = useContext(ShopContext);
  const cartItemCount = getCartItemCount(product.id);
  const inWishlist = isInWishlist(product.id);
  
  const handleWishlist = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  };
  
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
        <button 
          className={`wishlist-btn ${inWishlist ? 'active' : ''}`} 
          onClick={handleWishlist}
        >
          <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 17.75L8.55 16.4425C4.1 12.4825 1.25 9.9225 1.25 6.8C1.25 4.24 3.31 2.25 5.85 2.25C7.3 2.25 8.7 2.8675 9.625 3.8625C10.55 2.8675 11.95 2.25 13.4 2.25C15.94 2.25 18 4.24 18 6.8C18 9.9225 15.15 12.4825 10.7 16.455L10 17.75Z" fill={inWishlist ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </button>
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
