import React from "react";
import "./index.scss";

//Components
import Navbar from "../Navbar";

//Elements
import Button from "../../elements/Button";
import Para from "../Para";
import Container from "../../layouts/Container";

function Header() {
  return (
    <>
      <div className="header">
        <Container classes="container__header">
          <Navbar />
          <div className="header__box">
            <h1 className="header__primary-h1">
              Welcome to <span className="header__span-head">Paradise</span>{" "}
              Retreat!
            </h1>
            <Para classes="para__header">
              At Paradise Retreat, we take pride in offering guests the ultimate
              vacation experience. Our commitment to quality and customer
              satisfaction means you can rest assured that you'll have a
              memorable and enjoyable stay.
            </Para>
            <div className="header__btn-box">
              <Button classes="btn__header ">Explore </Button>
              {/* <Button classes="btn--ghost btn__header">Contact</Button> */}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Header;
