import React from "react";
import "./card.css";

const Card = () => {
  return (
    <div className="card-container">
      <div className="card-top">
        <h1>heading</h1>
      </div>
      <div className="card-body">
        <h2>body</h2>
      </div>
      <div className="card-bottom">
        <h3>bottom</h3>
      </div>
    </div>
  );
};

export default Card;
