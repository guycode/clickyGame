import React from "react";
import "./player.css";
const Players = props => (
  <div className="player" onClick={() => props.clickedImage(props.id)}>
    <div className="img-container">
      <img alt={props.player} src={props.image} />
    </div>
  </div>
);

export default Players;