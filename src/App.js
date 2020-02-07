import React, {
  Component
} from 'react';
import './App.css';

class App extends Component { // component is a property on react
  constructor() {
    super();
    this.state = {
      monsters: []
    };
  }

  //   // we're using this componentdidmount lifecycle method that we have access to because of our class component and we are 
  // fetching from this URL we are taking a response and converting it into the Jason format that are JavaScript can understand and use and 
  // then we're going to take the users that we got back from it and set our monsters to that array of user and that's how
  // we end up with this list of names from the API

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({
        monsters: users
      }));

  }
  render() { // this built in render method directly comes from the Reacts component library
    return ( <
      div className = "App" > {
        this.state.monsters.map(monsters => ( <
          h1 key = {
            monsters.id
          } > {
            monsters.name
          } < /h1>
        ))
      }


      <
      /div>
    );
  }
}

export default App;