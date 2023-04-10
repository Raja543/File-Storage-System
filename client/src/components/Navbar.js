import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Connectwallet from "./Connectwallet"

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/">
            SecureShareX
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link space" to="/about">
            Working
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link space" to="/accesslist">
            Allowlist
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link space" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
      <li className="wallet-display">
        <Connectwallet />
      </li>
    </nav>
  );
};

export default Navbar;
