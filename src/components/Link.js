import React from "react";

function Link({ link, text, target, mobileOnly }) {
  let c_class = mobileOnly ? "link-mobile" : "";

  return (
    <li className={`text-white ${c_class} animate__animated animate__zoomIn`}>
      <a target={target} href={link}>
        <button className="font-bold font-sans">{text}</button>
      </a>
    </li>
  );
}

export default Link;
