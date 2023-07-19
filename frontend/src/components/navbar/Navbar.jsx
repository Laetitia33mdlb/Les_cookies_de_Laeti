import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/pictures/logo_cookies.png";

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <Link to="/">
          <img className="logo" src={Logo} alt="Logo" />
        </Link>
        <h2 className="titleNavbar">Les cookies de Laeti</h2>
      </nav>
    </header>
  );
}
export default Navbar;
