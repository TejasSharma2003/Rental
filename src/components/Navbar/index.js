import React from "react";
import "./index.scss";

import logo from "../../assets/logo.svg";

import Container from "../../layouts/Container";

import Button from "../../elements/Button";

function Navbar() {
  return (
    <Container>
      <nav className="navbar">
        <div className="navbar__logo">
          <img src={logo} alt="logo" />
        </div>
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
        <div className="navbar__session utils-basic-flex">
          <span>
            <a className="navbar__sign-in" href="#">
              Sign In
            </a>
          </span>
          <Button classes="btn--ghost btn__navbar">Sign Up</Button>
        </div>
      </nav>
    </Container>
  );
}

export default Navbar;
