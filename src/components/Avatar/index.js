import React from "react";
import "./index.scss";

function Avatar(props) {
  return (
    <>
      <img className="avatar" src={props.src} alt={props.alt} />{" "}
      <span className="avatar__name">{props.name}</span>
    </>
  );
}

export default Avatar;
