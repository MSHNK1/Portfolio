import React from 'react';
import './contactLinks.css';

function ContactLinks(props) {
  return (
    <div className={`contacts flex mb-3${props.center ? props.center : " mb-10"}`}>
        <a href="https://www.linkedin.com/in/nikakochkiani/" target="_blank"><i className="fa fa-linkedin-square"></i></a>
        <a href="https://github.com/MSHNK1" target="_blank"><i className="fa fa-github-square"></i></a>
        <a href="https://twitter.com/KochkianiNika" target="_blank"><i className="fa fa-twitter-square"></i></a>
        <a href="https://www.facebook.com/nika.kochkiani" target="_blank"><i className="fa fa-facebook-square"></i></a>
    </div>
  )
};

export default ContactLinks;