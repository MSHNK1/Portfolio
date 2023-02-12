import React from 'react';
import ContactLinks from '../../UI/contactLinks/contactLinks';
import './footer.css';

function Footer() {
  return (
    <footer className='footer flex flex-col'>
        <ContactLinks center=" footer-center" />
        <h1 className='text-sm laptop:base'>&#169; 2022 made by Nika Kochkiani (MSHNK1)</h1>
    </footer>
  )
};

export default Footer;