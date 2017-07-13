import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import DateTimeContainer from './DateSelector/DateTimeContainer';

class App extends Component {

  componentDidMount () {
    let settings = {
      method: 'GET',
      headers: new Headers({ 'Content-Type': 'application/json' })
    };
    fetch('/api/timeslots', settings)
    .then(res => res.json())
    .then(res => {
      console.log(res);
    });
  }

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
