import React from "react";

import Avatar from "../Avatar";
import user from "../../assets/hostImg.jpg";

import { ImQuotesLeft } from "react-icons/im";

function ReviewCard() {
  return (
    <div className="review__card">
      <div className="review__row review__row--1">
        <span className="review__quote-icon">
          <ImQuotesLeft />
        </span>
        <span className="review__issued">Original Review: 21 January 2021</span>
      </div>
      <div className="review__row review__row--2">
        <p className="review__para">
          The featve I he when mahku. is the map teatve. I cm search using the
          to another tab to check the a j rot are if other Sites have tNs featue
        </p>
      </div>
      <div className="review__row review__row--3">
        <Avatar src={user} name="Benny Elmia" />
      </div>
    </div>
  );
}

export default ReviewCard;
