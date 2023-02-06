import React from "react";
import "./index.scss";

import places from "../Cards/places";

import Card from "../Card";

function Cards() {
  const cartItem = places.map((place) => {
    return (
      <Card
        key={place.id}
        imgSrc={place.imgSrc}
        name={place.name}
        description={place.description}
        hostName={place.hostName}
        hostImg={place.hostImg}
        price={place.price}
        url={place.url}
      />
    );
  });

  return cartItem;
}

export default Cards;
