import React from "react";
import "./index.scss";

import footerLogo from "../../assets/logo-green-1x.png";
import Container from "../../layouts/Container";
import Para from "../Para";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__logo-box">
          <img src={footerLogo} className="footer__logo" />
        </div>
        <div className="footer__container">
          <ul className="footer__links">
            <li className="footer__link">Company</li>
            <li className="footer__link">Terms</li>
            <li className="footer__link">Places</li>
            <li className="footer__link">Carrers</li>
            <li className="footer__link">Contant us</li>
          </ul>
          
          <Para classes="para__footer">
            Built by JONAS SCHMEDTMANN for his online course ADVANCED CSS AND
            SASS. Copyright © by Jonas Schmedtmann.
          </Para>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
