import React, {useRef, useState, useLayoutEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitch, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCoffee, faPaintBrush } from "@fortawesome/free-solid-svg-icons";
function SocialIcons({ Links }) {

  const refRef = useRef(null);
  const[a_class, setAClass] = useState("");
  useLayoutEffect(() => {
    const topPosition = refRef.current.getBoundingClientRect().top;
    let width = window.matchMedia("(min-width: 768px)");
    let loadAnim = "";
    if(width.matches){
      setAClass('animate__animated animate__fadeInUp');
    } else{
      loadAnim="animate__animated animate__fadeInUp";
    }
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      if (topPosition < scrollPosition) {
        setAClass(loadAnim);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="social-icons flex justify-evenly gap-4 my-10 md:my-6 ">
      <a ref={refRef} rel="noreferrer" href={Links[0].link} target="_blank">
        <FontAwesomeIcon className={`${a_class}`} icon={faTwitch} size="3x" />
      </a>
      <a ref={refRef} rel="noreferrer" href={Links[1].link} target="_blank">
        <FontAwesomeIcon className={`${a_class}`} icon={faTwitter} size="3x" />
      </a>
      <a ref={refRef} rel="noreferrer" href={Links[2].link} target="_blank">
        <FontAwesomeIcon className={`${a_class}`} icon={faPaintBrush} size="3x" />
      </a>
      <a ref={refRef} rel="noreferrer" href={Links[4].link} target="_blank">
        <FontAwesomeIcon className={`${a_class}`} icon={faCoffee} size="3x" />
      </a>
    </div>
  );
}

export default SocialIcons;
