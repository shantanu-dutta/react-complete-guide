import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'adsad121', name: 'Hari', age: 25 },
      { id: 'wqeqwe12', name: 'Ram', age: 27 },
      { id: 'zcasd121', name: 'Gopal', age: 26 },
    ],
    otherState: 'some other state',
    showPersons: true,
  }

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons,
    });
  };

  nameChangeHandler = (event, personId) => {
    const personIndex = this.state.persons.findIndex(p => p.id === personId);

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) =>
            <Person
              key={person.id}
              name={person.name}
              age={person.age}
              click={this.deletePersonHandler.bind(this, index)}
              changed={(event) => this.nameChangeHandler(event, person.id)} />
          )}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App!!!</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
