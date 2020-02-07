import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component { // component is a property on react
  constructor() {
    super();
    this.state = {
      string : "hellow Minhaz"
    };
  }


render() {  // this builtin render method directly comes from the Reacts component library
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> {this.state.string} </p>
        <button onClick={()=> this.setState ({ string:" Minhaz Haque" })} >
        change text </button>
      </header>
    </div>
  );
}
}

export default App;
