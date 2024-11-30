import React, { useState, useEffect } from 'react';
import { useLocation , useNavigate } from 'react-router-dom';
import './LandingPage.css';
import Navbar from '../../Components/Navbar/Navbar';
import CustomSnackbar from '../../Components/CustomSnackbar/CustomSnackbar';
import { useCart } from '../../Context/CartContext';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const LandingPage = () => {
  const navigate = useNavigate();
  const images = {
    heroBackground: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg",
    deepBlack: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg",
    latte: "https://images.pexels.com/photos/350478/pexels-photo-350478.jpeg",
    cubano: "https://images.pexels.com/photos/1233528/pexels-photo-1233528.jpeg",
    chocolateCake: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg",
    cheesecake: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg",
    tiramisu: "https://images.pexels.com/photos/6133305/pexels-photo-6133305.jpeg",
  };

  const location = useLocation();
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const { addToCart } = useCart();

  const testimonials = [
    {
      content: "The best coffee I've ever had! The atmosphere is perfect for both work and relaxation.",
      author: "Sarah Johnson",
      role: "Regular Customer"
    },
    {
      content: "Their specialty drinks are amazing. The staff is friendly and the service is quick!",
      author: "Michael Chen",
      role: "Coffee Enthusiast"
    },
    {
      content: "A perfect spot for coffee lovers. Their pastries are freshly baked and delicious!",
      author: "Emily Parker",
      role: "Food Blogger"
    },
    {
      content: "The ambiance and coffee quality are unmatched. It's my go-to place for meetings.",
      author: "David Wilson",
      role: "Business Professional"
    },
    {
      content: "Their attention to detail in every cup makes this place special. Highly recommended!",
      author: "Lisa Thompson",
      role: "Coffee Connoisseur"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // const nextSlide = () => {
  //   setCurrentSlide((prev) => 
  //     prev === testimonials.length - slidesToShow ? 0 : prev + 1
  //   );
  // };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) => 
  //     prev === 0 ? testimonials.length - slidesToShow : prev - 1
  //   );
  // };

  useEffect(() => {
    if (location.state?.showLoginSuccess) {
      setSnackbar({
        open: true,
        message: `Welcome back, ${location.state.username}! 👋`,
        severity: 'success'
      });
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
        <section className="hero-section" style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                    url(${images.heroBackground}) center/cover`
        }}>
          <h1>Start your day with a cup of coffee!</h1>
          <button className="cta-button" onClick={() => navigate('/menu')}>Explore Menu</button>
        </section>

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


        <section className="testimonials-section">
          <h2>What Our Customers Say</h2>
          <div className="testimonials-container">
            <div className="testimonials-slider">
              {testimonials.slice(currentSlide, currentSlide + slidesToShow).map((testimonial, index) => (
                <div 
                  key={currentSlide + index} 
                  className="testimonial-card"
                  style={{ 
                    animation: 'slideIn 0.8s ease-out forwards',
                  }}
                >
                  <div className="testimonial-content">
                    <p>{testimonial.content}</p>
                  </div>
                  <div className="testimonial-author">
                    <h4>{testimonial.author}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="slider-dots">
              {[...Array(testimonials.length - slidesToShow + 1)].map((_, idx) => (
                <button
                  key={idx}
                  className={`slider-dot ${currentSlide === idx ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </section>


        <footer className="footer-section">
          <div className="footer-container">
            <div className="footer-content">
              <div className="footer-info">
                <h3>Grab a Coffee</h3>
                <p>Experience the perfect blend of tradition and innovation in every cup.</p>
                <div className="social-links">
                  <a href="#" aria-label="Facebook"><FacebookIcon /></a>
                  <a href="#" aria-label="Instagram"><InstagramIcon /></a>
                  <a href="#" aria-label="Twitter"><TwitterIcon /></a>
                  <a href="#" aria-label="LinkedIn"><LinkedInIcon /></a>
                </div>
              </div>

              <div className="footer-links">
                <div className="link-group">
                  <h4>Quick Links</h4>
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/contact">Contact</a></li>
                  </ul>
                </div>

                <div className="link-group">
                  <h4>Visit Us</h4>
                  <ul>
                    <li><LocationOnIcon className="footer-icon" /> Bhaktapur, Nepal</li>
                    <li>Near Durbar Square</li>
                    <li><PhoneIcon className="footer-icon" /> +977 012345678</li>
                    <li><EmailIcon className="footer-icon" /> info@grabacoffee.com</li>
                  </ul>
                </div>

                <div className="link-group">
                  <h4>Opening Hours</h4>
                  <ul>
                    <li><AccessTimeIcon className="footer-icon" /> Monday - Friday</li>
                    <li>7:00 AM - 10:00 PM</li>
                    <li><AccessTimeIcon className="footer-icon" /> Saturday - Sunday</li>
                    <li>8:00 AM - 11:00 PM</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="newsletter-section">
              <h4>Subscribe to Our Newsletter</h4>
              <div className="newsletter-form">
                <input type="email" placeholder="Enter your email" />
                <button className="subscribe-btn">Subscribe</button>
              </div>
            </div>

            <div className="footer-bottom">
              <p>&copy; 2024 Grab a Coffee. All rights reserved.</p>
              <div className="footer-bottom-links">
                <a href="/privacy">Privacy Policy</a>
                <a href="/terms">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
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