import React from "react";
import Link from "./Link";
import Links from "../data/shrubbery-links";

import SocialIcons from "./Social-Icons";

const LinkBody = () => {
  let links = Links.map((link, index) => {
    return <Link 
    key={index}
    index={index}
    mobileOnly={link.mobileOnly}
    target={link.target}
    link={link.link} 
    text={link.text}>
    </Link>;
  });

  return (
    <div id="link-body">
      <ul className="flex flex-col items-center gap-10 p-10">{links}</ul>
      <SocialIcons Links={Links}/>
    </div>
  );
};

export default LinkBody;
