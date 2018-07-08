import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Portfolio from './Portfolio'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Portfolio/>
      </div>
    );
  }
}

export default App;
