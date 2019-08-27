import React from 'react';
import './App.css';
import Person from './Person/Person';

const app = () => (
  <div className="App">
    <h1>Hi, I'm a React App!!!</h1>
    <Person name="Hari" age="25" />
    <Person name="Ram" age="27">My Hobbies: Racing</Person>
    <Person name="Gopal" age="26" />

  </div>
);

export default app;
