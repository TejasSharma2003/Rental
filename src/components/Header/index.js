import React from "react";
import "./index.scss";

//Components
import Navbar from "../Navbar";

//Elements
import Button from "../../elements/Button";
import Para from "../Para";

function Header() {
  return (
    <div className="header">
      <div className="header__box-container">
        <div className="header__box">
          <h1 className="header__primary-h1">
            Welcome to Our Vacation Rentals
          </h1>
          <Para classes="para__header">
            Discover your perfect getaway at Botane. Our carefully
            selected vacation rentals offer the ultimate in comfort, style, and
            convenience.
          </Para>
          <div className="header__btn-box">
            <Button classes="btn__header">Show Places</Button>
            <Button classes="btn--ghost btn__header">Contact</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
