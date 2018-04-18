import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainHeaderBar from './mainPage/MainHeaderBar';
import MainList from './mainPage/containers/MainList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainHeaderBar/>
        <MainList/>
      </div>
    );
  }
}

export default App;
