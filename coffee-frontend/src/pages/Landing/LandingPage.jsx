import React from 'react';
import './LandingPage.css';
import Navbar from '../../Components/Navbar/Navbar';

const LandingPage = () => {
  // Image URLs
  const images = {
    heroBackground: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg",
    deepBlack: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg",
    latte: "https://images.pexels.com/photos/350478/pexels-photo-350478.jpeg",
    cubano: "https://images.pexels.com/photos/1233528/pexels-photo-1233528.jpeg"
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
              <p>Bold, smooth, and intensely rich.</p>
              <button className="order-button">Order Now</button>
            </div>
            <div className="special-card">
              <img src={images.latte} alt="Caffe Latte" />
              <h3>Caffe Latte</h3>
              <p>Creamy espresso with steamed milk.</p>
              <button className="order-button">Order Now</button>
            </div>
            <div className="special-card">
              <img src={images.cubano} alt="Café Cubano" />
              <h3>Café Cubano</h3>
              <p>Sweet, strong Cuban espresso with frothy milk.</p>
              <button className="order-button">Order Now</button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <h2>Our Address</h2>
          <div className="contact-info">
            <h3>Grab a Coffee</h3>
            <p>Bhaktapur, Nepal</p>
            {/* <p>Coffee Town, CT 12345</p> */}
            <p className="phone">012345678</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default LandingPage;