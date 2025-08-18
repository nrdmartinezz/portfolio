import { Link } from "react-router-dom";
import Image from "./Image";
import Button from "./Button";

let Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-logo-container">
        <Link to="/">
          <Image
            alt={"Nate Delgado Martinez"}
            height={100}
            width={107}
            image={"Asset_2_r4vxqf"}
            imgClass={"nav-logo"}
          ></Image>
        </Link>
      </div>
      <div className="nav-menu-container">
        <Button
          icon="menu"
          text="Menu"
          className="nav-menu-button"
          onClick={() => {
            console.log("menu clicked!");
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
