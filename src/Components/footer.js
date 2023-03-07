import React from 'react';
import './css/footer.css';
import { FaInstagramSquare, FaGithub, FaTwitter, FaSpotify, FaWhatsapp, FaTelegram } from 'react-icons/fa'

function Footer() {
  return (
    <div>
        <div className="footer-container">
  </div>
      <div className="footer-bottom">
      <div className="social-icons">
        <a href="https://www.instagram.com/yazmeenaz/" target="_blank" rel="noreferrer"> <FaInstagramSquare></FaInstagramSquare></a>
        <a href="https://github.com/yasminnur" target="_blank" rel="noreferrer"> <FaGithub></FaGithub></a>
        <a href="https://twitter.com/metpagitems" target="_blank" rel="noreferrer"> <FaTwitter></FaTwitter></a>
          <a href="https://open.spotify.com/user/31njnuccsmbprbxdnt27ruxzuex4?si=8c0a3c80d63b47e6" target="_blank" rel="noreferrer"> <FaSpotify></FaSpotify></a>
          <a href="https://wa.me/+6282337080704" target="_blank" rel="noreferrer"> <FaWhatsapp></FaWhatsapp></a>
          <a href="https://t.me/username_bot?start=yourmessage" target="_blank" rel="noreferrer"> <FaTelegram></FaTelegram></a> 
          {/* Ganti "username_bot" dengan nama pengguna Anda di Telegram.
          Ganti "yourmessage" dengan pesan yang ingin Anda sampaikan. */}
      </div>
    <p>&copy; 2023 Yasmin Nur Azmina</p>
  </div>
    </div>
  );
}

export default Footer;
