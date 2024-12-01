import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const specialItems = [
    {
      id: 1,
      name: "Seasonal Blend",
      description: "Our limited-time seasonal coffee blend, featuring notes of caramel and dark chocolate.",
      price: 250,
      image: "https://www.starbucks.co.th/stb-media/2020/08/17.Caffe-Americano1080.png"
    },
    {
      id: 2,
      name: "Signature Latte",
      description: "House-made vanilla syrup, steamed milk, and our signature espresso blend.",
      price: 300,
      image: "https://www.starbucks.co.th/stb-media/2020/08/26.Vanilla-Latte1080.png"
    },
    {
      id: 3,
      name: "Cold Brew Tonic",
      description: "Our smooth cold brew coffee paired with artisanal tonic water and a hint of citrus.",
      price: 280,
      image: "https://www.starbucks.co.th/stb-media/2020/08/45.Cold-Brew1080.png"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="landing-container">
        <section className="hero-section">
          <div className="hero-content">
            <h1>Experience the Perfect Cup</h1>
            <p>Discover our handcrafted coffee and delightful treats</p>
            <button className="cta-button" onClick={() => navigate("/menu")}>
              View Menu
            </button>
          </div>
        </section>

        <section className="features-section">
          <div className="features-container">
            <div className="feature-card">
              <h3>Premium Quality</h3>
              <p>Sourced from the finest coffee beans around the world</p>
            </div>
            <div className="feature-card">
              <h3>Fresh & Organic</h3>
              <p>Always fresh, always organic, always delicious</p>
            </div>
            <div className="feature-card">
              <h3>Expert Baristas</h3>
              <p>Crafted by passionate coffee artisans</p>
            </div>
          </div>
        </section>

        <section className="specials-section">
          <h2>Today's Specials</h2>
          <div className="specials-container">
            {specialItems.map((item) => (
              <div key={item.id} className="special-card">
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="special-footer">
                  <span className="price">Rs. {item.price}</span>
                  <button 
                    className="order-button"
                    onClick={() => navigate('/menu')}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-section">
          <div className="contact-container">
            <div className="contact-info">
              <h2>Visit Us</h2>
              <h3>Location</h3>
              <p>123 Coffee Street, Kathmandu, Nepal</p>
              <h3>Hours</h3>
              <p>Monday - Friday: 7am - 8pm</p>
              <p>Saturday - Sunday: 8am - 9pm</p>
              <h3 className="phone">+977 9876543210</h3>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LandingPage; 