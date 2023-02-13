import React from "react";
import "./index.scss";

import logo from "../../assets/logo-green-1x.png";

import Container from "../../layouts/Container";

import Button from "../../elements/Button";
import NewNavbar from "../NewNavbar";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__links utils-basic-flex">
        <li className="navbar__link">
          <a href="/">Features</a>
        </li>
        <li className="navbar__link">
          <a href="/">Places</a>
        </li>
        <li className="navbar__link">
          <a href="/">Reviews</a>
        </li>
        <li className="navbar__link">
          <a href="/">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
