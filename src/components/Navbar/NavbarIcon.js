import React from "react";
import { NavLink } from "react-router-dom";

const NavbarIcon = ({ icon, path, style }) => {
  return (
    <div>
      <li className="btn nav-item pr-4">
        <NavLink exact to={path}>
          <img src={icon} style={style} alt="" />
        </NavLink>
      </li>
    </div>
  );
};

export default NavbarIcon;
