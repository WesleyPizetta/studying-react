import React, { useState } from 'react';
import Person from './Person/Person';
import './App.css';

//notes:
//useState: the most important react hook; it allows us to manage state in a functional component
//return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m a React App!!!')) is the compiled version of jsx format (mostly used)
//method that you're not calling, but assigning as an event handler -> put the "Handler" word in these cases

const app = props => {
  const [personState, setPerson] = useState({
    person: [
      { name: 'Wesley', age: 19 },
      { name: 'Boglárka', age: 18 },
      { name: 'Key', age: 20 }
    ]
  }); //it always return two elements; the first one is the own useState, the second one is a function that allow us to update the state element
  const switchNameHandler = () => {
    setPerson({
      person: [
        { name: 'Wesley Pizetta', age: 19 },
        { name: 'Boglárka Bokor', age: 18 },
        { name: 'Key', age: 20 }
      ]
    })
  }  
  return (
    <div className="App">
      <h1>Hi, I'm a react App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
        <Person 
          name={personState.person[0].name} 
          age={personState.person[0].age} 
        />
        <Person 
          name={personState.person[1].name} 
          age={personState.person[1].age}
        />
        <Person 
          name={personState.person[2].name} 
          age={personState.person[2].age}
        />
    </div>
  );
}

export default app;