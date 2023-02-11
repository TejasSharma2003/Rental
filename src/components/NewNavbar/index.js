import React, { useState } from "react";
import "./index.scss";

function NewNavbar() {
  const [openNav, setOpenNav] = useState(false);

  const bgClass = openNav ? "navigation__bg--open" : "";
  const navClass = openNav ? "navigation__nav--show" : "";
  const hamTop = openNav ? "navigation__hamburger-top--hide" : "";
  const hamBottom = openNav ? "navigation__hamburger-bottom--hide" : " ";
  const hamMain = openNav ? "navigation__hamburger-main--active" : "";

  const onClickHandler = () => {
    setOpenNav((pre) => !pre);
  };

  return (
    <>
      <div className={`navigation__bg ${bgClass}`}></div>
      <div onClick={onClickHandler} className="navigation__menu">
        <span
          className={`navigation__hamburger-line navigation__hamburger-top ${hamTop}`}
        ></span>
        <span
          className={`navigation__hamburger-line navigation__hamburger-main ${hamMain}`}
        ></span>
        <span
          className={`navigation__hamburger-line navigation__hamburger-bottom ${hamBottom}`}
        ></span>
      </div>
      <nav className={`navigation__nav ${navClass}`}>
        <ul className="navigation__links">
          <li className="navigation__link">About</li>
          <li className="navigation__link">Features</li>
          <li className="navigation__link">Places</li>
          <li className="navigation__link">Reviews</li>
          <li className="navigation__link">Contact</li>
        </ul>
      </nav>
    </>
  );
}

export default NewNavbar;
