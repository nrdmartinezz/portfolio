import {Link} from "react-router-dom";

let Navbar = () =>{
    return <nav className="nav-container">
        <div className="nav-logo-container">
            <Link to="/">
            <img className="logo"></img>
            </Link>
            <Link to="/">
            <span className="poppins-regular">Nate Martinez</span>
            </Link>
        </div>
        <div className="nav-menu-container">
            <Link to="/bio" className="nav-menu-item poppins-regular">
                <label>Bio</label>
            </Link>
            <Link to="/contact" className="nav-menu-item poppins-regular">
                <label>Contact</label>
            </Link>
        </div>
    </nav>
}

export default Navbar;