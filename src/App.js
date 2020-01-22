import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

  class App extends Component {
    state = {
      person: [
        { name: 'Wesley', age: 19 },
        { name: 'Boglárka', age: 18 },
        { name: 'Key', age: 20 }
      ]
    };

    switchNameHandler = () => {
      this.setState({
        person: [
          { name: 'Wesley Pizetta', age: 19 },
          { name: 'Boglárka Bokor', age: 18 },
          { name: 'Key', age: 20 }
        ]
      })
    } //method that you're not calling, but assigning as an event handler
    render(){
    return (
      <div className="App">
        <h1>Hi, I'm a react App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
          <Person 
            name={this.state.person[0].name} 
            age={this.state.person[0].age} 
          />
          <Person 
            name={this.state.person[1].name} 
            age={this.state.person[1].age}
          />
          <Person 
            name={this.state.person[2].name} 
            age={this.state.person[2].age}
          />
      </div>
    );// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m a React App!!!')) compiler version of jsx above this
  }
}

export default App;


