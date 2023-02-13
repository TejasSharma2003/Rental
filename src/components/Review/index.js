import React from "react";
import "./index.scss";

import Container from "../../layouts/Container";

import Heading from "../Heading";

import ReviewCard from "./ReviewCard";

import Carousel from "react-multi-carousel";

import { CustomButtonGroupAsArrows, responsive } from "./Carousel";

function Review() {
  return (
    <>
      <section id="section">
        <Container>
          <Heading classes="heading__primary">
            WE MAKE PEOPLE GENUINELY HAPPY
          </Heading>
        </Container>
      </section>
      <Carousel
        responsive={responsive}
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<CustomButtonGroupAsArrows />}
        containerClass="review__container"
        itemClass="review__item"
      >
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </Carousel>
    </>
  );
}

export default Review;
