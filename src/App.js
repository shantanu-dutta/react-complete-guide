import React, { Component } from 'react';
import styles from './App.module.scss';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'adsad121', name: 'Hari', age: 25 },
      { id: 'wqeqwe12', name: 'Ram', age: 27 },
      { id: 'zcasd121', name: 'Gopal', age: 26 }
    ],
    otherState: 'some other state',
    showPersons: false
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
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
      persons: persons
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;
    let btnClass = '';
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => (
            <Person
              key={person.id}
              name={person.name}
              age={person.age}
              click={this.deletePersonHandler.bind(this, index)}
              changed={event => this.nameChangeHandler(event, person.id)}
            />
          ))}
        </div>
      );
      btnClass = styles.Red;
    }
    const pClasses = [];
    if (this.state.persons.length <= 2) {
      pClasses.push(styles.red);
    }
    if (this.state.persons.length <= 1) {
      pClasses.push(styles.bold);
    }

    return (
      <div className={styles.App}>
        <h1>I'm a React App</h1>
        <p className={pClasses.join(' ')}>This is really working!</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
