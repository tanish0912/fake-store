import { createContext, useState, useEffect } from 'react';

export const ShopContext = createContext(null);

export const ShopContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState(() => {
    // Initialize cart from localStorage
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : {};
  });
  
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  
  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, []);
  
  // Add item to cart
  const addToCart = (productId) => {
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
  };
  
  // Remove item from cart
  const removeFromCart = (productId) => {
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[productId] > 1) {
        newCart[productId] -= 1;
      } else {
        delete newCart[productId];
      }
      return newCart;
    });
  };
  
  // Clear cart
  const clearCart = () => {
    setCart({});
  };
  
  // Get cart item count
  const getCartItemCount = (productId) => {
    return cart[productId] || 0;
  };
  
  // Get cart total
  const getCartTotal = () => {
    let total = 0;
    for (const item in cart) {
      const itemInfo = products.find((product) => product.id === parseInt(item));
      if (itemInfo) {
        total += itemInfo.price * cart[item];
      }
    }
    // Convert from USD to INR
    return (total * 83).toFixed(2);
  };
  
  // Get cart items
  const getCartItems = () => {
    return Object.keys(cart).map((itemId) => {
      const product = products.find((p) => p.id === parseInt(itemId));
      return {
        ...product,
        quantity: cart[itemId],
      };
    });
  };
  
  const contextValue = {
    products,
    loading,
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    getCartItemCount,
    getCartTotal,
    getCartItems
  };
  
  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
}; 