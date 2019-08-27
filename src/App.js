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
    return (
      <div className="App">
        <h1>Hi, I'm a React App!!!</h1>
        {this.state.persons.map(p => <Person name={p.name} age={p.age} />)}
      </div>
    );
  }
}

export default App;
