import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import MagPoBoard from './MagPoBoard';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p className="App-intro">
          <MagPoBoard />
        </p>
      </div>
    );
  }
}

export default App;
