import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitch, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCoffee, faPaintBrush } from "@fortawesome/free-solid-svg-icons";
function SocialIcons() {
  return (
    <div>
      <FontAwesomeIcon icon={faTwitch} />
      <FontAwesomeIcon icon={faTwitter} />
      <FontAwesomeIcon icon={faCoffee} />
      <FontAwesomeIcon icon={faPaintBrush } />
    </div>
  );
}

export default SocialIcons;
