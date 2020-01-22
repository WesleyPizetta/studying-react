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
    render(){

    const style = {
      backgroundColor: 'grey',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
      //inline style
    }

    return (
      <div className="App">
        <h1>Hi, I'm a react App</h1>
        <p>This is really working!</p>
        <button 
        style={style}//calling the inline style by using "style"
        onClick={this.switchNameHandler.bind(this, 'Wesley Pizetta')}>Switch Name</button>
          <Person 
            name={this.state.person[0].name} 
            age={this.state.person[0].age} 
          />
          <Person 
            name={this.state.person[1].name} 
            age={this.state.person[1].age}
            click={this.switchNameHandler.bind(this, 'Wesie')}
            change={this.nameChangedHandler}
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


