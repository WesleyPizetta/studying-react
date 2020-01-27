import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';


  class App extends Component {
    state = {
      person: [
        { name: 'Wesley', age: 19 },
        { name: 'Boglárka', age: 18 },
        { name: 'Key', age: 20 }
      ],
      showPersons: false
    };

    switchNameHandler = (newName) => {
      this.setState({
        person: [
          { name: newName, age: 19 },
          { name: 'Boglárka Bokor', age: 18 },
          { name: 'Key', age: 20 }
        ]
      })
    } //method that you're not calling, but assigning as an event handler

    nameChangedHandler = (event) => {
      this.setState({
        person: [
          { name: 'Wesley', age: 19 },
          { name: event.target.value, age: 18 },
          { name: 'Key', age: 20 }
        ]
      })
    }

    togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({
        showPersons: !doesShow
      })
    }

    render () {
    const style = {
      backgroundColor: 'grey',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
      //inline style
    }

    let persons = [];

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.person.map(persons => {
            return <Person 
              name={persons.name}
              age={persons.age} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a react App</h1>
        <p>This is really working!</p>
        <button 
        style={style}//calling the inline style by using "style"
        onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    );// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m a React App!!!')) compiler version of jsx above this
  }
}

export default App;


