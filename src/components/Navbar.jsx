import { Link } from "react-router-dom";
import Image from "./Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faThreads,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

let Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-logo-container">
        <Link to="/">
          <Image
            alt={"Nate Delgado Martinez"}
            height={50}
            width={268}
            image={"NRD.Martinez_n8pplu"}
          ></Image>
        </Link>
      </div>
      <div className="nav-menu-container">
        <a target="_blank" href="https://www.instagram.com/dyslyl.nate/">
          <FontAwesomeIcon fontSize={36} icon={faInstagram} />
        </a>
        <a target="_blank" href="https://www.threads.net/@dyslyl.nate" >
          <FontAwesomeIcon fontSize={36} icon={faThreads} />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/nathanael-delgado/">
          <FontAwesomeIcon fontSize={36} icon={faLinkedin} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
