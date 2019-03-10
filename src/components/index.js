import React from "react";
import ReactDOM from "react-dom";
import "./player.css";

const Players = props => (
  <div className="player" onClick={() => props.clickedImage(props.id)}>
    <div className="img-container">
      <img alt={props.player} src={props.image} />
      <div className="overlay">
        <div className="text">
          {props.name}
        </div>
      </div>
    </div>
  </div>
);

export default Players;