import React from "react";
import "./NavItems.css";
import { Link } from "react-router-dom";
const NavItems = () => {
  return (
    <React.Fragment>
      <ul className="navbar-menu">
        <li>
          <Link to="/categories">Categories</Link>
        </li>
        <li>
          <Link to="/cuisines">Cuisines</Link>
        </li>
        <li>
          <Link to="/recipes">Recipes</Link>
        </li>
        <li>
          <Link to="/aboutus">About Us</Link>
        </li>
      </ul>
    </React.Fragment>
  );
};
export default NavItems;
