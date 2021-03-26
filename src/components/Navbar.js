import React from "react";
import worldwide from "../images/worldwide.png";
import logo from "../images/logo-black.png";
import search from "../images/magnifying-glass.png";
import user from "../images/user2.png";
import cart from "../images/shopping-carrt.png";

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
        <a className="navbar-brand offset-md-1" href="#">
          <img className="" src={logo} alt="" />
        </a>
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
          className="collapse navbar-collapse justify-content-center m-auto"
          id="navbarSupportedContent"
        >
          <ul
            className="navbar-nav text-uppercase font-weight-bold"
            style={{ fontSize: "14px" }}
          >
            <li className="nav-item pr-4">
              <a className="nav-link text-dark" href="#">
                δωρα
              </a>
            </li>
            <li className="nav-item pr-4">
              <a className="nav-link text-dark" href="#">
                εκτυπωσεις ενδυματων
              </a>
            </li>
            <li className="nav-item pr-4">
              <a className="nav-link text-dark" href="#">
                αυτοκολλητα
              </a>
            </li>
            <li className="nav-item pr-4">
              <a className="nav-link text-dark" href="#">
                καμβαδες
              </a>
            </li>
            <li className="nav-item pr-4">
              <a className="nav-link text-dark" href="#">
                κεντηματα ενδυματων
              </a>
            </li>
            <li className="nav-item pr-4">
              <a className="nav-link text-dark" href="#">
                offset εκτυπωσεις
              </a>
            </li>
            <div className="buttons d-flex ">
              <li className="btn nav-item pr-4">
                <img src={search} style={{ width: "22px" }} alt="" />
              </li>
              <li className="btn nav-item pr-4">
                <img src={user} style={{ width: "22px" }} alt="" />
              </li>
              <li className="btn nav-item pr-4">
                <img src={cart} style={{ width: "22px" }} alt="" />
              </li>
            </div>
          </ul>
        </div>
        <div className="col-md-1"></div>
      </nav>
    </div>
  );
};

export default Navbar;
