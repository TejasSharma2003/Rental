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
      <Navbar />
      <div className="header__box">
        <h1 className="header__primary-h1">Vacation Rental Service</h1>
        <Para classes="para__header">
          To get the best of your adventure you just need to and where you like.
          We are waiting you!
        </Para>
        <div className="header__btn-box">
          <Button classes='btn__header'>Show Places</Button>
          <Button classes="btn--ghost btn__header">Contact</Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
