import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  // const [ this.state, setthis.state ] = useState({
  //   persons: [
  //     { name: 'Max', age: 28 },
  //     { name: 'Manu', age: 29 },
  //     { name: 'Stephanie', age: 26 }
  //   ]
  // });

  // const [otherState, setOtherState] = useState('some other value')

  // const switchNameHandler = () => {
  //   // console.log('Was clicked!')
  //   setthis.state({
  //     persons: [
  //       { name: 'Maximilian', age: 28 },
  //       { name: 'Manu', age: 29 },
  //       { name: 'Stephanie', age: 16 }
  //     ] 
  //   })
  // }

  // return (
  //   <div className="App">
  //     <h1>Hi, I'm a React App</h1>
  //     <p>This is really working!</p>
  //     <button onClick={switchNameHandler}>Switch Name</button>
  //     <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
  //     <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My Hobbies: Racing</Person>
  //     <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
  //   </div>
  // );  
  
  state = {
    persons: [
      { id: 'akg5', name: 'Max', age: 28 },
      { id: 'ri57', name: 'Manu', age: 29 },
      { id: 'fnw8', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  } 

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 16 }
      ]
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }; //same as : const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons
    })
  }

  deletePersonHandler = (personIndex) => {
      //const persons = this.state.persons.slice();
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />

    }

    return (
      <div className={classes.App}>
        <Cockpit 
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;