

let Navbar = () =>{
    return <nav className="nav-container">
        <div className="nav-logo-container">
            <img className="logo"></img>
            <span className="poppins-regular">Nate Martinez</span>
        </div>
        <div className="nav-menu-container">
            <a href="/bio" className="nav-menu-item poppins-regular">
                <label>Bio</label>
            </a>
            <a href="/contact" className="nav-menu-item poppins-regular">
                <label>Contact</label>
            </a>
        </div>
    </nav>
}

export default Navbar;