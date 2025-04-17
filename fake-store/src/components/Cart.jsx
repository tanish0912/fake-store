import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import './Cart.css';

function Cart() {
  const { getCartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(ShopContext);
  const cartItems = getCartItems();
  
  return (
    <div className="cart">
      <div className="container">
        <h1 className="cart-title">Your Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
            <Link to="/shop" className="btn">Start Shopping</Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="cart-item-details">
                    <h3 className="cart-item-title">{item.title}</h3>
                    <p className="cart-item-price">₹{(item.price * 83).toFixed(2)}</p>
                  </div>
                  <div className="cart-item-controls">
                    <div className="quantity-controls">
                      <button 
                        className="quantity-btn"
                        onClick={() => removeFromCart(item.id)}
                      >
                        -
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button 
                        className="quantity-btn"
                        onClick={() => addToCart(item.id)}
                      >
                        +
                      </button>
                    </div>
                    <p className="cart-item-subtotal">
                      ₹{(item.price * item.quantity * 83).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="cart-summary">
              <button className="btn btn-danger" onClick={clearCart}>
                Clear Cart
              </button>
              <div className="cart-total">
                <span>Total:</span>
                <span className="total-amount">₹{getCartTotal()}</span>
              </div>
              <button className="btn checkout-btn">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
