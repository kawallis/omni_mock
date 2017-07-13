import React from 'react';
import './DateTimeBox.css';
import DateDropDown from '../components/datedropdown';
import PikadayBox from '../components/pikaday';

export default function DateTimeBox(props) {
  let {date, time, availableTimes} = props;

  return (
    <div className="DateTimeBox">
      <h1>Choose Date & Time</h1>
      <div className="SelectorContainer">
        <PikadayBox date={date}/>
        <DateDropDown text={time} availableTimes={availableTimes}/>
      </div>
    </div>
  );
}