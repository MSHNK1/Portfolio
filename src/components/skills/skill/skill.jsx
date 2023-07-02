import React from "react";
import './skill.css';

export default function Skill(props) {
  return (
    <div className="skill flex flex-col gap-2 justify-between items-center py-4 user-select-none">
      <img src={props.item.icon} alt={props.item.alt} />
      <p>{props.item.alt}</p>
    </div>
  );
}
