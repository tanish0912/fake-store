import { Link } from "react-router-dom";
import './Landing.css';

function Landing() {
    return (
        <div className="landing">
            <div className="hero">
                <div className="container hero-container">
                    <div className="hero-content">
                        <h1 className="hero-title">Welcome to FakeStore</h1>
                        <p className="hero-subtitle">
                            Discover the best products with the best prices.
                            Shop now and get amazing deals on our vast selection.
                        </p>
                        <Link to="/shop" className="btn hero-btn">
                            Shop Now
                        </Link>
                    </div>
                    <div className="hero-image">
                        <img src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=1050&auto=format&fit=crop" alt="Shopping illustration" />
                    </div>
                </div>
            </div>

            <div className="features">
                <div className="container">
                    <h2 className="features-title">Why Choose Us</h2>
                    <div className="features-grid">
                        <div className="feature">
                            <div className="feature-icon">🌟</div>
                            <h3>Quality Products</h3>
                            <p>We offer high-quality products from trusted brands.</p>
                        </div>
                        <div className="feature">
                            <div className="feature-icon">💰</div>
                            <h3>Best Prices</h3>
                            <p>Competitive prices and regular discounts.</p>
                        </div>
                        <div className="feature">
                            <div className="feature-icon">🚚</div>
                            <h3>Fast Delivery</h3>
                            <p>Quick and reliable delivery service.</p>
                        </div>
                        <div className="feature">
                            <div className="feature-icon">🔒</div>
                            <h3>Secure Payment</h3>
                            <p>Multiple secure payment methods available.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="cta">
                <div className="container">
                    <h2>Ready to shop?</h2>
                    <p>Browse our collection and find your favorite products.</p>
                    <div className="cta-buttons">
                        <Link to="/shop" className="btn">
                            View All Products
                        </Link>
                        <Link to="/cart" className="btn btn-secondary">
                            Go to Cart
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
