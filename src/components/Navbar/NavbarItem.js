import React from "react";
import { NavLink } from "react-router-dom";

const NavbarItem = ({ content, path }) => {
  return (
    <div>
      <li className="nav-item pr-4">
        <NavLink exact to={path} className="nav-link text-dark">
          {content}
        </NavLink>
      </li>
    </div>
  );
};

export default NavbarItem;
