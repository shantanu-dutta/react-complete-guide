import React from 'react';
import './Person.css';

const person = ({ name, age, children, click, changed }) => (
  <div className="Person" onClick={click}>
    <p>I'm {name} and I'm {age} years old!</p>
    <p>{children}</p>
    <input type="text" onChange={changed} value={name} />
  </div>
);

export default person;
