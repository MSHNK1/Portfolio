import React from 'react';
import './backDrop.css';

export default function BackDrop(props) {
  return (
    props.show ? <div className="backdrop" onClick={props.clicked}></div> : null
  )
}
