import React from 'react';
import { Instagram, Facebook, Twitter, Mail, ArrowUp } from 'lucide-react';


const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="custom-footer-wrapper">
      <div className="container">
        <div className="row g-md-5 g-0"> {/* Increased gap for cleaner look */}
          
          {/* Column 1: Brand Philosophy */}
          <div className="col-lg-4 col-md-12">
            <h2 className="custom-footer-logo">ELÉGANCE<span>.</span></h2>
            <p className="custom-footer-about">
              Our botanical formulas are crafted for the modern individual who seeks 
              the perfect balance between nature’s purity and scientific precision.
            </p>
            <div className="custom-footer-socials">
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Column 2: Quick Shop */}
          <div className="col-lg-2 col-6">
            <h5 className="custom-footer-head">Collections</h5>
            <ul className="custom-footer-list">
              <li><a href="#">Serums</a></li>
              <li><a href="#">Face Oils</a></li>
              <li><a href="#">Cleansers</a></li>
              <li><a href="#">Sun Care</a></li>
            </ul>
          </div>

          {/* Column 3: The House */}
          <div className="col-lg-2 col-6">
            <h5 className="custom-footer-head">The House</h5>
            <ul className="custom-footer-list">
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Sustainability</a></li>
              <li><a href="#">Ingredients</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="col-lg-4 col-md-12">
            <h5 className="custom-footer-head">Stay Connected</h5>
            <p className="custom-footer-newsletter-text">Join us for early access to new launches and skincare tips.</p>
            <div className="custom-footer-input-box">
              <input type="email" placeholder="Your Email Address" />
              <button className="footer-submit-btn"><Mail size={18} /></button>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="custom-footer-divider"></div>

        {/* Bottom Bar */}
        <div className="custom-footer-bottom">
          <div className="footer-copyright-info">
             <p className="custom-footer-copyright">© 2026 AXEPERT EXHIBITS. ALL RIGHTS RESERVED.</p>
             <div className="custom-footer-legal">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms</a>
             </div>
          </div>
          
          <button className="custom-footer-up-btn" onClick={scrollToTop} title="Scroll to top">
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;