import React from 'react';
import './Footer.css';  // 引入样式文件

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left side: Logo image */}
        <div className="footer-logo">
            YAO MA
          {/*<img src="https://via.placeholder.com/150" alt="Logo" />*/}
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
