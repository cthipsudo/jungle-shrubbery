import React, {useRef, useLayoutEffect} from "react";

function Link({ link, text, target, mobileOnly }) {
  let c_class = (mobileOnly) ? 'link-mobile' : '';
  const refRef = useRef(null);
  
  return (
    <li ref={refRef} className={`text-white animate__animated animate__zoomIn ${c_class}`}>
      <a target={target} href={link}>
        <button className="font-bold font-sans">{text}</button>
      </a>
    </li>
  );
}

export default Link;
