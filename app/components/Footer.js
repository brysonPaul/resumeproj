// components/Footer.js

import React from 'react';
import "../styles.css";

const Footer = () => {
  return (
    <div style={{height:"7vh", backgroundColor:"#3a3b3c", marginTop: "5%"}}>
        <footer className="footer width-100%  ">
            <p className='footertext'>© {new Date().getFullYear()} Bryson Paul</p>
        </footer>
    </div>
   
  );
};

export default Footer;
