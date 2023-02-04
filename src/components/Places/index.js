import React from "react";
import Container from "../../layouts/Container";
import Heading from "../Heading";
import "./index.scss";

import Cards from "../Cards";
import Link from "../../elements/Link";

function Places() {
  return (
    <div id="section">
      <Container>
        <div className="places">
          <Heading classes="heading__primary">
            places for your next stay.
          </Heading>
          <div className="places__container">
            <Cards />
          </div>
        </div>
        <div className="places__link-box">
          <Link classes="link__places">See more places</Link>
        </div>
      </Container>
    </div>
  );
}

export default Places;
