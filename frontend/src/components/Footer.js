import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.57)", // Semi-transparent black
        backdropFilter: "blur(6px)",           // Frosted glass effect
        color: "white",
        padding: "30px 0",
        textAlign: "center",
        width: "100%",
      }}
    >
      {/* Social Media Icons */}
      <div style={{ marginBottom: '15px' }}>
        <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ margin: '0 10px', color: '#fff', fontSize: '24px' }}>
          <FaFacebookF />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ margin: '0 10px', color: '#fff', fontSize: '24px' }}>
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ margin: '0 10px', color: '#fff', fontSize: '24px' }}>
          <FaLinkedinIn />
        </a>
        <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" style={{ margin: '0 10px', color: '#fff', fontSize: '24px' }}>
          <FaWhatsapp />
        </a>
      </div>

      {/* Contact Info */}
      <p>Contact: 18001372227 | info@ctgroup.in</p>

      {/* Copyright */}
      <p>© {new Date().getFullYear()} All Rights Reserved | Developed by <strong>Amit Sharma</strong> , <strong>Nisha</strong> & <strong>Harsh deep</strong></p>
    </footer>
  );
};

export default Footer;
