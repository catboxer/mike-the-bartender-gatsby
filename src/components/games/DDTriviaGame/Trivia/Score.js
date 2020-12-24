import React from "react";


export default function Score(props) {
  return (
    <React.Fragment>
      <div className="score">Your Score Is: {props.currentScore}</div>
      <h3>
        {props.cards.length === 0 &&
          "You Are A Winner & Therefore You Get To See This Cool Private Photo Taken By Mike The Bartender"}
        {props.cards.length > 0 &&
          "Clear All The Cards &  Mike The Bartender will share a secret photo with you."}
      </h3>
    </React.Fragment>
  );
}
