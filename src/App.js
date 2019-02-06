import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NewTodo from './components/NewTodo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">My To Do List</h1>
        </header>
        <div className="App-container">
          <NewTodo />
          {/* <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p> */}
        </div>
      </div>
    );
  }
}

export default App;
