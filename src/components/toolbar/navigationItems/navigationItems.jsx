import React from 'react';
import './navigationItems.css';
import ScrollspyNav from 'react-scrollspy-nav';
import { NavLink } from "react-router-dom";

function NavigationItems(props) {
  const navitems = ['Home', "About", "Skills", 'Portfolio', "Contact"]
  
  const sideDrawer = "navbar flex flex-col"
  return (
    // <div className='tabletAndAbove'>
      <ScrollspyNav
        scrollTargetIds={navitems}
        offset={10}
        activeNavClass="is-active"
        scrollDuration="100"
        headerBackground="true"
      >
        {/* <ul className={`${props.navClass ? 'navbarClass ' : ''}navbar flex tabletAndAbove`}> */}
        <ul className={`${sideDrawer} ${props.navClass ? 'navbarClass' : ''} mobile-xl:flex-row`}>
          {navitems.map(item => (
              <li className='text-sm tablet:text-lg laptop:text-xl'  key={item}>
                <a href={`#${item}`} aria-label={`#${item}`}>
                  {item}
                </a>
              </li>
          ))}
        </ul>
      </ScrollspyNav>
    // </div>
  )
};

export default NavigationItems;