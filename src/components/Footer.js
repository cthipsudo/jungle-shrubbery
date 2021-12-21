import react from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrimace } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="c-footer text-center text-white p-5">
      <p>
        Developed By{" "}
        <a
          className="underline decoration-solid"
          href="https://twitter.com/narrator_oscar"
        >
          cthipsudo
        </a>{" "}
        <FontAwesomeIcon icon={faGrimace} />
      </p>
    </footer>
  );
}

export default Footer;
