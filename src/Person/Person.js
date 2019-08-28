import React from 'react';

const person = ({ name, age, children, click}) => (
  <div>
    <p onClick={click}>I'm {name} and I'm {age} years old!</p>
    <p>{children}</p>
  </div>
);

export default person;
