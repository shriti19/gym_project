import React from 'react'
import { FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
        <p>Designed And Developed By Shriti Chanda</p><br/>
        <div className="social-icons">
        <a href="mailto:your-email@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope size={30} />
        </a>
        <a href="https://x.com/?lang=en" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} />
        </a>
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
      </div>

    </footer>
  )
}

export default Footer