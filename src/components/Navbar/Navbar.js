import React from "react";
import { NavLink } from "react-router-dom";
import NavbarItem from "./NavbarItem";
import NavbarIcon from "./NavbarIcon";
import worldwide from "../../assets/worldwide.png";
import logo from "../../assets/logo-black.png";
import search from "../../assets/magnifying-glass.png";
import user from "../../assets/user2.png";
import cart from "../../assets/shopping-carrt.png";

const Navbar = () => {
  return (
    <div className="">
      <div className="text-white top-header d-flex align-items-center justify-content-center">
        <div className="d-flex offset-md-1 col">
          <div className="language-icon">
            <img src={worldwide} style={{ width: "22px" }} alt="" />
          </div>
          <div className="pl-3">Ελληνικά</div>
        </div>
      </div>
      <div className="top-header-line py-0"></div>

      <nav
        className="navbar navbar-expand-xl navbar-light bg-light"
        style={{ minHeight: "95px" }}
      >
        <NavLink exact to="/" className="navbar-brand offset-md-1">
          <img src={logo} alt="" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse pl-4"
          id="navbarSupportedContent"
        >
          <ul
            className="navbar-nav text-uppercase font-weight-bold"
            style={{ fontSize: "14px" }}
          >
            <NavbarItem content="δωρα" path="/" />
            <NavbarItem content="εκτυπωσεις ενδυματων" path="/" />
            <NavbarItem content="αυτοκολλητα" path="/" />
            <NavbarItem content="καμβαδες" path="/" />
            <NavbarItem content="κεντηματα ενδυματων" path="/" />
            <NavbarItem content="offset εκτυπωσεις" path="/" />

            <div className="d-flex">
              <NavbarIcon icon={search} path="/" style={{ width: "22px" }} />
              <NavbarIcon icon={user} path="/" style={{ width: "22px" }} />
              <NavbarIcon icon={cart} path="/" style={{ width: "22px" }} />
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
