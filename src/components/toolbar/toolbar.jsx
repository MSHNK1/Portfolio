import React, { useState, useEffect } from 'react';
import DrawerToggle from '../sideDrawer/drawerToggle/drawerToggle';
import SideDrawer from '../sideDrawer/sideDrawer';
import Logo from './logo/logo';
import NavigationItems from './navigationItems/navigationItems';
import "./toolbar.css";

function Toolbar() {
  const [headerClass, setHeaderClass] = useState('');
  const [navClass, setNavClass] = useState(false);
  const [sideDrawer, setSideDrawer] = useState(false);

  const drawerToggleHandler = () => {
    setSideDrawer(!sideDrawer)
  }

  const sideDrawerClose = () => {
    setSideDrawer(false)
  }

  useEffect(() => {
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
      // if (document.documentElement.scrollTop > 50 || document.body.scrollTop > 50) {
      if (document.documentElement.scrollTop > 50) {
          setHeaderClass('header-1 ');
          setNavClass(true);
        } else {
          setHeaderClass('header-2 ');
          setNavClass(false);
        }
    }
  })
  
  return (
    <>
      <header className={`${headerClass}fixed left-0 top-0 w-full z-50 px-8 laptop:px-32`}>
        <nav className='flex relative justify-between text-center animate__animated animate__fadeIn'>
          <Logo navClass={navClass} />
          <DrawerToggle navClass={navClass} clicked={drawerToggleHandler} />
          <div className='tabletAndAbove'>
            <NavigationItems navClass={navClass} />
          </div>
        </nav>
        <SideDrawer opened={sideDrawer} closed={sideDrawerClose} />
      </header>
    </>
  )
};

export default Toolbar;