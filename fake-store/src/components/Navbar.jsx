import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import './Navbar.css';

function Navbar() {
  const { cart } = useContext(ShopContext);
  
  // Calculate total items in cart
  const itemCount = Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <h1>FakeStore</h1>
        </Link>
        
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/shop" className="navbar-link">Shop</Link>
          <Link to="/cart" className="navbar-link cart-link">
            Cart
            {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 