import React from "react";


export default function CardImage(props) {
  return (
    <div>
      <img className="card-img" src={props.src} alt={props.alt} />
    </div>
  );
}
