import React from 'react';
import './drawerToggle.css';

function DrawerToggle(props) {
  return (
    <div className={`burger ${props.navClass ? "padding-1" : "padding-2"} flex flex-col justify-between mobile-xl:hidden`} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
};

export default DrawerToggle;