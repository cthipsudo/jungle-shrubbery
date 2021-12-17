import React from "react";

function Link({ link, text }) {
  return (
    <li className="text-white">
      <button>
        <a target="_blank" href={link}>
          {text}
        </a>
      </button>
    </li>
  );
}

export default Link;
