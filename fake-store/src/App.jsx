import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShopContextProvider } from './context/ShopContext';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Shop from './components/Shop';
import Cart from './components/Cart';
import './App.css';

function App() {
  return (
    <ShopContextProvider>
      <Router>
        <div className="app">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <footer className="footer">
            <div className="container">
              <p>&copy; {new Date().getFullYear()} FakeStore. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </Router>
    </ShopContextProvider>
  );
}

export default App;
