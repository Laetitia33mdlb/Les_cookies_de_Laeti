import React from "react";
import Logo from "../../assets/pictures/logo_cookies.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img className="logo" src={Logo} alt="Logo" />
      <h2 className="titleNavbar">Les cookies de Laeti</h2>
    </nav>
  );
}
export default Navbar;
