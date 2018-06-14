import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PersonList from './Components/PersonList'
import Navbar from './Components/Navbar'
class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar/>
        <PersonList/>
      </div>
    );
  }
}

export default App;
