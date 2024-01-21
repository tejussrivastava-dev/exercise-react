import React from "react";

import "./Card.css";

interface GradientBackgroundProps {
  startColor: string | boolean;
  endColor: string | boolean;
  name: string | boolean;
  animal: string;
  founder: string;
}

const Card: React.FC<GradientBackgroundProps> = ({
  startColor,
  endColor,
  name,
  animal,
  founder,
}) => {
  const gradientStyle: React.CSSProperties = {
    background: `linear-gradient(to right, ${startColor}, ${endColor})`,
    width: "100%",
    margin: "0 auto",
    height: "15px",
    borderRadius: "6px",
  };

  return (
    <div className="card">
      <div className="upperRow">
        <h1>{name}</h1>
        <p>{animal}</p>
      </div>
      <div style={gradientStyle}></div>
      <div className="lastRow">
        <p>Founder: </p>
        <h5>{founder}</h5>
      </div>
    </div>
  );
};

export default Card;
