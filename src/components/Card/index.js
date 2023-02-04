import React from "react";
import Button from "../../elements/Button";
import "./index.scss";

import Avatar from "../Avatar";

function Card(props) {
  return (
    <div className="card">
      <div className="card__img-box">
        <img className="card__img" src={props.imgSrc} alt={props.name} />
      </div>
      <div className="card__row">
        <h2 className="card__place-name">{props.name}</h2>
        <span className="card__description">{props.description}</span>
      </div>
      <div className="card__row card__row--2">
        <Avatar
          src={props.hostImg}
          alt={props.hostName}
          name={props.hostName}
        />
      </div>
      <div className="card__row card__row--3">
        <span className="card__place-price">
          ${props.price}
          <span>/night</span>
        </span>
        <Button classes="btn__card">View Place</Button>
      </div>
    </div>
  );
}

export default Card;
