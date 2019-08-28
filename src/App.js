import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Hari', age: 25 },
      { name: 'Ram', age: 27 },
      { name: 'Gopal', age: 26 },
    ],
    otherState: 'some other state'
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Haris Chandra', age: 28 },
        { name: 'Ramu', age: 27 },
        { name: 'Gopal', age: 23 },
      ]
    })
  }

  const personsList = personsState.persons.map(person =>
    <Person key={person.name + person.age} name={person.name} age={person.age} />
  );
  return (
    <div className="App">
      <h1>Hi, I'm a React App!!!</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      {personsList}
    </div>
  );
};

export default App;

