import React from 'react';
import NavigationItems from '../toolbar/navigationItems/navigationItems';
import BackDrop from '../../UI/backDrop/backDrop';
import './sideDrawer.css';

export default function SideDrawer(props) {
  let attachedClasses = "";
  let backDrop_true ="false"
  if (props.opened) {
    backDrop_true = "true"
    attachedClasses = "open"
  }
  return (
    <div>
      <BackDrop show={backDrop_true} clicked={props.closed}/>
      <div className={`sideDrawer ${attachedClasses} mobile-xl:hidden`} show={backDrop_true} onClick={props.closed}>
          <NavigationItems />
      </div>
    </div>
  )
};