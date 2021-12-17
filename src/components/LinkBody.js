import React from "react";
import Link from "./Link";
import Links from "../data/shrubbery-links";

const LinkBody = () => {
  let links = Links.map((link) => {
    return <Link 
    link={link.link} 
    text={link.text}>
    </Link>;
  });

  return (
    <div id="link-body">
      <ul className="flex flex-col items-center gap-10 p-10">{links}</ul>
    </div>
  );
};

export default LinkBody;
