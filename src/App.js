import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/helloworld.js'
import BusinessCard from './components/businesscard.js';
// import { Button } from 'reactstrap';  
import { Table } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <HelloWorld name="User"/>
        <BusinessCard name="Leviste, Denise" organization=""/>
      </div>
    );
  }
}

export default App;
