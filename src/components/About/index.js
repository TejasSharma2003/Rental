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
              We offer a wide range of properties, from cozy studios to spacious
              homes, each with its own unique charm and character. Our
              properties are fully equipped with all the amenities you need to
              feel at home.
            </Para>
            <Heading classes="heading__tertiory heading__tertiory-about utils-mg-top-medium">
              We offer a wide range of properties
            </Heading>
            <Para classes="para__about">
              We offer a diverse collection of vacation rentals, each designed
              to meet the unique needs and preferences of our guests. Whether
              you're looking for a cozy studio for a romantic getaway, a
              spacious home for a family vacation.
            </Para>
            <Link classes="link__about">Learn more</Link>
          </div>
          <Composition />
        </div>
      </Container>
    </section>
  );
}

export default About;
