import React, { useState } from 'react';
import './ContactPage.css';
import Navbar from '../../Components/Navbar/Navbar';
import { TextField, Button, Snackbar, Alert } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSnackbar({
      open: true,
      message: 'Thank you for your message! We will get back to you soon.',
      severity: 'success'
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <>
      <Navbar />
      <div className="contact-page-container">
        {/* Hero Section */}
        <section className="contact-hero-section">
          <h1>Get in Touch</h1>
          <p>We'd love to hear from you!</p>
        </section>

        <div className="contact-content">
          {/* Contact Form */}
          <section className="contact-form-section">
            <div className="form-container">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  margin="normal"
                  className="contact-input"
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  margin="normal"
                  className="contact-input"
                />
                <TextField
                  fullWidth
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  margin="normal"
                  className="contact-input"
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  margin="normal"
                  multiline
                  rows={4}
                  className="contact-input"
                />
                <Button 
                  type="submit" 
                  variant="contained" 
                  className="submit-button"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </section>

          {/* Contact Info Section */}
          <section className="contact-details-section">
            <div className="contact-details-container">
              <div className="contact-detail">
                <LocationOnIcon className="contact-icon" />
                <div className="detail-text">
                  <h3>Location</h3>
                  <p>Bhaktapur Durbar Square, Bhaktapur, Nepal</p>
                </div>
              </div>
              
              <div className="contact-detail">
                <AccessTimeIcon className="contact-icon" />
                <div className="detail-text">
                  <h3>Opening Hours</h3>
                  <p>Monday - Friday: 7:00 AM - 9:00 PM</p>
                  <p>Saturday - Sunday: 8:00 AM - 10:00 PM</p>
                </div>
              </div>

              <div className="contact-detail">
                <PhoneIcon className="contact-icon" />
                <div className="detail-text">
                  <h3>Phone</h3>
                  <p>+977 012345678</p>
                </div>
              </div>

              <div className="contact-detail">
                <EmailIcon className="contact-icon" />
                <div className="detail-text">
                  <h3>Email</h3>
                  <p>info@grabacoffee.com</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Map Section */}
        <section className="map-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.9404038877365!2d85.42631731506244!3d27.673051982804085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1aae42806ba1%3A0x5449e079404e5e82!2sBhaktapur%20Durbar%20Square!5e0!3m2!1sen!2snp!4v1647887641245!5m2!1sen!2snp"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Location Map"
          ></iframe>
        </section>

        <Snackbar 
          open={snackbar.open} 
          autoHideDuration={6000} 
          onClose={handleCloseSnackbar}
        >
          <Alert 
            onClose={handleCloseSnackbar} 
            severity={snackbar.severity}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </div>
    </>
  );
};

export default ContactPage;