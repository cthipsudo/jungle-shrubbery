import React from "react";

function Link({ link, text }) {
  return (
    <li className="text-white">
      <button>
        <a className="font-bold font-sans" target="_blank" href={link}>
          {text}
        </a>
      </button>
    </li>
  );
}

export default Link;
