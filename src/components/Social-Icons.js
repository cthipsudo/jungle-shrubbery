import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitch, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCoffee, faPaintBrush } from "@fortawesome/free-solid-svg-icons";
function SocialIcons({ Links }) {
  return (
    <div className="social-icons flex justify-evenly gap-4 my-10 ">
      <a href={Links[0].link} target="_blank">
        <FontAwesomeIcon className="animate__animated animate__fadeInUp" icon={faTwitch} size="3x" />
      </a>
      <a href={Links[1].link} target="_blank">
        <FontAwesomeIcon className="animate__animated animate__fadeInUp" icon={faTwitter} size="3x" />
      </a>
      <a href={Links[2].link} target="_blank">
        <FontAwesomeIcon className="animate__animated animate__fadeInUp" icon={faPaintBrush} size="3x" />
      </a>
      <a href={Links[3].link} target="_blank">
        <FontAwesomeIcon className="animate__animated animate__fadeInUp" icon={faCoffee} size="3x" />
      </a>
    </div>
  );
}

export default SocialIcons;
