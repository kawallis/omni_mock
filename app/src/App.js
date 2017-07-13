import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import DateTimeContainer from './DateSelector/DateTimeContainer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="DateContainer">
          <DateTimeContainer />
        </div>
      </div>
    );
  }
}

export default App;
