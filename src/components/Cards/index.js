import React from "react";
import "./index.scss";

import imgComp1 from "../../assets/img-comp1.jpg";
import imgComp2 from "../../assets/img-comp2.jpg";
import imgComp3 from "../../assets/img-comp3.jpg";
import hostImg from "../../assets/hostImg.jpg";

import Card from "../Card";

function Cards() {
  const places = [
    {
      id: "1cd",
      imgSrc: imgComp1,
      name: "Antoninus Comba",
      description: "A wonderful place for a family and friends.",
      hostName: "Berlin Juous",
      hostImg: hostImg,
      price: "129",
      url: "#",
    },
    {
      id: "1c3",
      imgSrc: imgComp2,
      name: "Antoninus Comba",
      description: "A wonderful place for a family and friends.",
      hostName: "Berlin Juous",
      hostImg: hostImg,
      price: "129",
      url: "#",
    },
    {
      id: "1ct",
      imgSrc: imgComp3,
      name: "Antoninus Comba",
      description: "A wonderful place for a family and friends.",
      hostName: "Berlin Juous",
      hostImg: hostImg,
      price: "129",
      url: "#",
    },
    
  ];

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
