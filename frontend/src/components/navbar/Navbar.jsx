import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/pictures/logo_cookies.png";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img className="logo" src={Logo} alt="Logo" />
      </Link>
      <h2 className="titleNavbar">Les cookies de Laeti</h2>
    </nav>
  );
}
export default Navbar;
