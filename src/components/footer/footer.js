import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <span className="footer-text-red">Designed and developed by</span>
        </div>
        <div className="footer-center">
          <span className="footer-text-dark">Aragonda-Smarthub Technologies. All Rights reserved.</span>
        </div>
        <div className="footer-right">
          <span className="footer-text-red">Contact us</span>
          <div className="contact-info">
            <p>+ 91 9731598060</p>
            <p>+ 91 7207907767</p>
            <p>sales@smarthubit.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;