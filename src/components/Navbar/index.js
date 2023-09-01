import React from "react";
import { NavLink as Link } from "react-router-dom";
import "./NavBarElements.css";
const Navbar = () => {
  const NavLink = Link;
  return (
    <div>
      <nav>
        <navMenu>
          <NavLink to="/index" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact Us
          </NavLink>
          <NavLink to="/blogs" className="nav-link">
            Blogs
          </NavLink>
          <NavLink to="/sign-up" className="nav-link">
            Sign Up
          </NavLink>
        </navMenu>
      </nav>
    </div>
  );
};
export default Navbar;
