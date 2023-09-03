import React from "react";
import { useState } from "react";
import { NavLink as Link } from "react-router-dom";
import "./NavBarElements.css";
const Navbar = () => {
  const NavLink = Link;
  const [showNav, setShowNav] = useState(false);
  return (
    <div>
      <button
        className={`side-bar-toggle button ${showNav ? "no-show" : ""}`}
        onClick={() => setShowNav(!showNav)}
      >
        Toggle SideBar
      </button>
      <nav className={`${showNav ? "show" : ""}`}>
        <nav-menu>
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
          <button className="button" onClick={() => setShowNav(!showNav)}>
            Toggle SideBar
          </button>
        </nav-menu>
      </nav>
    </div>
  );
};
export default Navbar;
