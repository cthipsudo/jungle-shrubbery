import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitch, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCoffee, faPaintBrush } from "@fortawesome/free-solid-svg-icons";
function SocialIcons() {
  return (
    <div className="social-icons flex justify-evenly gap-4 my-10">
      <FontAwesomeIcon icon={faTwitch} size="3x" />
      <FontAwesomeIcon icon={faTwitter} size="3x" />
      <FontAwesomeIcon icon={faPaintBrush } size="3x" />
      <FontAwesomeIcon icon={faCoffee} size="3x" />
    </div>
  );
}

export default SocialIcons;
