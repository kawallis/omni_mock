import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import DateTimeBox from './DateSelector/DateTimeBox';

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
          <DateTimeBox />
        </div>
      </div>
    );
  }
}

export default App;
