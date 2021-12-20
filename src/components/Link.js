import React from "react";

function Link({ link, text }) {
  return (
    <li className="text-white">
      <a target="_blank" href={link}>
        <button className="font-bold font-sans">{text}</button>
      </a>
    </li>
  );
}

export default Link;
