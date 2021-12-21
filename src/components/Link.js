import React from "react";

function Link({ link, text, target, mobileOnly, index }) {
  let c_class = (mobileOnly) ? 'link-mobile' : ''
  return (
    <li className={`text-white animate__animated animate__zoomIn ${c_class}`}>
      <a target={target} href={link}>
        <button className="font-bold font-sans">{text}</button>
      </a>
    </li>
  );
}

export default Link;
