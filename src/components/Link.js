import React from "react";

function Link({ link, text, index }) {
  let c_class = (index%2) != 1 ? 'animate__zoomIn' : 'animate__zoomIn'
  return (
    <li className={`text-white animate__animated ${c_class}`}>
      <a target="_blank" href={link}>
        <button className="font-bold font-sans">{text}</button>
      </a>
    </li>
  );
}

export default Link;
