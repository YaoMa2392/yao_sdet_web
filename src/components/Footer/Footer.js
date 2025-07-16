import React from 'react';
import './Footer.css';
import logo from "../../assets/foot_bug_logo.PNG";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
          <div className="footer-logo">
              <img src={logo} alt="footer Logo" className="logo" />
          </div>

        {/* Right side: Contact Info */}
        <div className="footer-contact">
          <h4>Contact Me</h4>
          <p>Email: yao.ngsde@gmail.com</p>
          <p>Phone: +1 (551) 331-5704</p>
          <p>LinkedIn: https://www.linkedin.com/in/yaoma1111/</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
