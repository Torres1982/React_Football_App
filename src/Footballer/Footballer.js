import React from 'react';
import './Footballer.css';

const footballer = (props) => {
  return (
    <div className="Footballer">
      <h2> {props.name} {props.surname} </h2>
      <p> <span> Age: </span> {props.age} </p>
      <p> <span> Country: </span> {props.nationality} </p>
      <p> <span> Club: </span> {props.club} </p>
      <p id="props_children">{props.children}</p>
    </div>
  );
}

export default footballer;