import React from "react";
import "./navScore.css";

function Scoreboard(props) {
  return (
    <header className="score">
      <div className="row">
      <div className="col-md-12 col-right">
      <h6>Click on your favorite hockey players, but only once!</h6></div>
      </div>
       <div className="col-md-3 col-right"><h6>High Score {props.topScore}</h6></div>
        <div className="col-md-3 col-right"><h6>Current Score: {props.score}</h6></div>
      
    
    </header>
  );
}
export default Scoreboard;