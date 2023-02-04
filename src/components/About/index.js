import React from "react";
import "./index.scss";

import Container from "../../layouts/Container";
import Para from "../Para";

// import aboutImg from "../../assets/aboutImg.png";
import Composition from "../Composition";
import Heading from "../Heading";
import Link from "../../elements/Link";

function About() {
  return (
    <section id="section">
      <Container>
        <Heading classes="heading__primary heading__about">
          Make your vacation memorable.
        </Heading>
        <div className="about">
          <div className="about__text-box">
            <Heading classes="heading__tertiory heading__tertiory-about">
              Your are going to make your vacation worth a while
            </Heading>
            <Para classes="para__about">
              We offer expectional number of houses you it will easier for you
              to get inot as fast as possible to fullfull your needs we are
              persistantly updating our plans.
            </Para>
            <Heading classes="heading__tertiory heading__tertiory-about utils-mg-top-medium">
              Your are going to make your vacation worth a while
            </Heading>
            <Para classes="para__about">
              we offer expectional number of houses you it will easier for you
              to get inot as fast as possible to fullfull your needs we are
              persistantly updating our plans.
            </Para>
            <Link classes='link__about'>Learn more</Link>
          </div>
          <Composition />
        </div>
      </Container>
    </section>
  );
}

export default About;
