import React from "react";

let counter = 0;

export default function Answers(props) {
  function handleChange(event) {
    if (event.target.id === props.correctAns) {
      counter++;
      event.currentTarget.classList.add("correct");
      props.getScore(counter);
      setTimeout(() => {
        props.deleteCard(props.id);
      }, 500);
    } else {
      counter--;
      event.currentTarget.classList.add("incorrect");
      props.getScore(counter);
    }
  }

  return (
    <div className="answers">
      <input onChange={handleChange} type="radio" id="ans1" name="ans" />
      <label>{props.ans1}</label>
      <br />

      <input onChange={handleChange} type="radio" id="ans2" name="ans" />
      <label>{props.ans2}</label>
      <br />

      <input onChange={handleChange} type="radio" id="ans3" name="ans" />
      <label>{props.ans3}</label>
      <br />

      <input onChange={handleChange} type="radio" id="ans4" name="ans" />
      <label>{props.ans4}</label>
      <br />
    </div>
  );
}
