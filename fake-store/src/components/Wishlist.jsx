import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Product from './Product';
import './Shop.css';

function Wishlist() {
  const { getWishlistItems, wishlist } = useContext(ShopContext);
  const wishlistItems = getWishlistItems();
  
  return (
    <div className="shop">
      <div className="container">
        <h1 className="shop-title">My Wishlist</h1>
        
        {wishlist.length === 0 ? (
          <div className="no-products">
            <p>Your wishlist is empty.</p>
          </div>
        ) : (
          <div className="grid products-grid">
            {wishlistItems.map(product => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Wishlist; 