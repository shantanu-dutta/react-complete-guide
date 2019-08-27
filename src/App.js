import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Hari', age: 25 },
      { name: 'Ram', age: 27 },
      { name: 'Gopal', age: 26 },
    ]
  }

  render() {
    const personsList = this.state.persons.map((person, index) =>
      <Person key={index} name={person.name} age={person.age} />
    );
    return (
      <div className="App">
        <h1>Hi, I'm a React App!!!</h1>
        {personsList}
      </div>
    );
  }
}

export default App;
