import React from 'react';
import NavigationItems from '../toolbar/navigationItems/navigationItems';
import BackDrop from '../../UI/backDrop/backDrop';
import './sideDrawer.css';

export default function SideDrawer(props) {
  let attachedClasses = "";
  if (props.opened) {
    attachedClasses = "open"
  }
  return (
    <div>
      <BackDrop show={props.opened} clicked={props.closed}/>
      <div className={`sideDrawer ${attachedClasses} mobile-xl:hidden`} show={props.opened} onClick={props.closed}>
          <NavigationItems />
      </div>
    </div>
  )
};