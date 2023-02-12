import React from 'react';
import logo from '../../../assets/images/logo.svg';
import './logo.css';

function Logo(props) {
  return (
    <a href='/' className={`${props.navClass ? "logoCl-1 " : "logoCl-2 "}logo`}>
      <img src={logo} alt="Logo" />
    </a>
  )
};

export default Logo;