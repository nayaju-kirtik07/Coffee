import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './LandingPage.css';
import Navbar from '../../Components/Navbar/Navbar';
import CustomSnackbar from '../../Components/CustomSnackbar/CustomSnackbar';
import { useCart } from '../../Context/CartContext';

const LandingPage = () => {
  // Image URLs
  const images = {
    heroBackground: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg",
    deepBlack: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg",
    latte: "https://images.pexels.com/photos/350478/pexels-photo-350478.jpeg",
    cubano: "https://images.pexels.com/photos/1233528/pexels-photo-1233528.jpeg",
    chocolateCake: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg",
    cheesecake: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg",
    tiramisu: "https://images.pexels.com/photos/6133305/pexels-photo-6133305.jpeg"
  };

  const location = useLocation();
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const { addToCart } = useCart();

  useEffect(() => {
    // Check for login success message from navigation state
    if (location.state?.showLoginSuccess) {
      setSnackbar({
        open: true,
        message: `Welcome back, ${location.state.username}! 👋`,
        severity: 'success'
      });
      // Clear the state after showing the message
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const handleOrderClick = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    setSnackbar({
      open: true,
      message: 'Order added to cart successfully! 🛒',
      severity: 'success'
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <>
      <Navbar />
      <div className="landing-container">
        {/* Hero Section */}
        <section className="hero-section" style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                    url(${images.heroBackground}) center/cover`
        }}>
          <h1>Start your day with a cup of coffee!</h1>
          <button className="cta-button">Explore Menu</button>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="feature-card">
            <div className="feature-icon">☕</div>
            <h3>Original Coffee</h3>
            <p>Savor the rich, authentic flavors of our handpicked original coffee blends, sourced from the world’s finest coffee-growing regions.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🍰 </div>
            <h3>Delicious Cakes</h3>
            <p>Indulge in our freshly baked cakes, from classic chocolate to artisanal creations, perfectly paired with your favorite coffee.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🍵</div>
            <h3>23 Coffees to Choose</h3>
            <p>Browse our selection of 23 diverse coffees, offering a variety of roasts and profiles to suit every taste preference.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌟</div>
            <h3>Pleasant Ambient</h3>
            <p>Create the perfect atmosphere with our coffee, designed to enhance relaxation and bring warmth to any moment.</p>
          </div>
        </section>

        {/* Weekly Specials */}
        <section className="specials-section">
          <h2>Weekly Specials</h2>
          <div className="specials-container">
            <div className="special-card">
              <img src={images.deepBlack} alt="Deep Black Coffee" />
              <h3>Deep Black Coffee</h3>
              <p>Rich and bold espresso with velvety crema.</p>
              <div className="price">Rs. 300</div>
              <button 
                className="order-button" 
                onClick={() => handleOrderClick({
                  id: 'deep-black',
                  name: 'Deep Black Coffee',
                  price: 300,
                  image: images.deepBlack
                })}
              >
                Order Now
              </button>
            </div>
            <div className="special-card">
              <img src={images.chocolateCake} alt="Chocolate Cake" />
              <h3>Chocolate Truffle</h3>
              <p>Decadent layers of dark chocolate ganache.</p>
              <div className="price">RS. 250</div>
              <button 
                className="order-button" 
                onClick={() => handleOrderClick({
                  id: 'chocolate-cake',
                  name: 'Chocolate Truffle',
                  price: 250,
                  image: images.chocolateCake
                })}
              >
                Order Now
              </button>
            </div>
            <div className="special-card">
              <img src={images.latte} alt="Caramel Latte" />
              <h3>Caramel Latte</h3>
              <p>Smooth espresso with creamy caramel swirl.</p>
              <div className="price">RS. 200</div>
              <button 
                className="order-button" 
                onClick={() => handleOrderClick({
                  id: 'caramel-latte',
                  name: 'Caramel Latte',
                  price: 200,
                  image: images.latte
                })}
              >
                Order Now
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <h2>Get in Touch</h2>
          <div className="contact-container">
            <div className="contact-info">
              <div className="contact-card">
                <h3>Visit Us</h3>
                <p>Grab a Coffee</p>
                <p>Bhaktapur, Nepal</p>
                <p>Near Durbar Square</p>
              </div>
              <div className="contact-card">
                <h3>Call Us</h3>
                <p className="phone">+977 012345678</p>
                <p className="phone">+977 987654321</p>
              </div>
              <div className="contact-card">
                <h3>Opening Hours</h3>
                <p>Monday - Friday: 7:00 AM - 10:00 PM</p>
                <p>Saturday - Sunday: 8:00 AM - 11:00 PM</p>
                <p>Holidays: 9:00 AM - 9:00 PM</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <CustomSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
      />
    </>
  );
};

export default LandingPage;