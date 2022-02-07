import React, { Component } from 'react';
import './App.css';
import Header from "./basic/Header";
import Test from "./basic/Test";
import Parent from "./aboutProps/Parent";
import logo from './logo.svg';
import Parent_state from "./aboutProps/Parent_state";
import LifeCycle1 from "./aboutProps/LifeCycle1";

class App extends Component {
  render() {
    return (
    <div>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
        {/*<Header></Header>
        <Test></Test>*/}
      {/*1. prop Example*/}

      {/*<Parent></Parent>*/}


      {/*2. State Example*/}

     {/* <Parent_state></Parent_state>*/}

    <LifeCycle1></LifeCycle1>




      </div>
    );
  }
}

export default App;
