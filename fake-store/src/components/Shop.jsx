import { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import Product from './Product';
import './Shop.css';

function Shop() {
  const { products, loading } = useContext(ShopContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState([]);
  const location = useLocation();
  
  // Extract search query from URL if present
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchQuery = params.get('search');
    
    if (searchQuery) {
      setSearchTerm(searchQuery);
    }
  }, [location.search]);
  
  // Extract unique categories
  useEffect(() => {
    if (products.length > 0) {
      const uniqueCategories = [...new Set(products.map(product => product.category))];
      setCategories(uniqueCategories);
    }
  }, [products]);
  
  // Filter products based on category and search term
  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Filter by search term
    if (searchTerm.trim()) {
      const lowercaseSearch = searchTerm.toLowerCase();
      result = result.filter(product => 
        product.title.toLowerCase().includes(lowercaseSearch) || 
        product.description.toLowerCase().includes(lowercaseSearch)
      );
    }
    
    setFilteredProducts(result);
  }, [products, selectedCategory, searchTerm]);
  
  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }
  
  return (
    <div className="shop">
      <div className="container">
        <h1 className="shop-title">Our Products</h1>
        
        <div className="shop-filters">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          
          <div className="category-filter">
            <label htmlFor="category">Category:</label>
            <select 
              id="category" 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="category-select"
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        {filteredProducts.length === 0 ? (
          <div className="no-products">
            <p>No products found. Try changing your filters.</p>
          </div>
        ) : (
          <div className="grid products-grid">
            {filteredProducts.map(product => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Shop;
