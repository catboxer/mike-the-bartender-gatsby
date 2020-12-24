import React from "react";
import CardImage from "./CardImage";
import Answers from "./Answers";

export default function TriviaCard(props) {
  return (
    <article className="questions">
      <h2>{props.question}</h2>
      <CardImage src={props.src} alt={props.alt} />
      <Answers
        ans1={props.ans1}
        ans2={props.ans2}
        ans3={props.ans3}
        ans4={props.ans4}
        correctAns={props.correctAns}
        deleteCard={props.deleteCard}
        id={props.id}
        getScore={props.getScore}
      />
    </article>
  );
}
