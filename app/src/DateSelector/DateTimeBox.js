import React from 'react';
import './DateTimeBox.css';
import DateDropDown from '../components/datedropdown';

export default function DateTimeBox(props) {
  let {date, time} = props;
  console.log(date);
  return (
    <div className="DateTimeBox">
      <h1>Choose Date & Time</h1>
      <div className="SelectorContainer">
        <DateDropDown text={date}/>
        <DateDropDown text={time}/>
      </div>
    </div>
  );
}