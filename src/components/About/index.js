import React from "react";
import "./index.scss";

import Container from "../../layouts/Container";
import Para from "../Para";

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
              We offer a wide range of amenities
            </Heading>
            <Para classes="para__about">
              We are dedicated to providing our guests with an unforgettable
              experience, with exceptional customer service and personalized
              attention to every detail. Book your next escape with us today and
              discover the beauty of Botane vacation rentals.
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
