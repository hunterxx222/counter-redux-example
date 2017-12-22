import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Counter App</h1>
        </header>
        <p className="counter">{this.props.counter}</p>
        <button onClick={() => this.props.dispatch({ type: "INC" })}>
          Increment
        </button>
        <button onClick={() => this.props.dispatch({ type: "DEC" })}>
          Decrement
        </button>
      </div>;
  }
}
const mapStateToProps = state => state
export default connect(mapStateToProps)(App);
