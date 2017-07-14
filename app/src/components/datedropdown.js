import React, { Component } from 'react';
import './datedropdown.css';
import arrow from '../assets/arrow.svg';

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function dollars(dolla) {
  if (dolla > 0) {
    return `$ ${dolla}`;
  }else {
    return 'free'
  }
}

function formatAMPM(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  let strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

class DateDropDown extends Component {
  render() {
    let slots = null;
    if (this.props.slotsView ) {
      slots = <div className="SlotsBox">
        <ul className="DatesContainer">
          {this.props.dates.map((time, i) => {
            return <li className="Times" key={i}>
              {`${formatAMPM(time.timestamp)}`}
              <span className="Prices">{dollars(time.price)}</span></li>;
          })}
        </ul>
      </div>
    } else {
      slots = null;
    }
    return (
      <div className="MainContainer">
        <div className="DateDropDownContainer"
          onClick={() => {
            this.props.showSlots();
          }}>
          <h3>Choose A Time</h3>
          <img className="ArrowIcon" src={arrow} alt="" />
        </div>
        {slots}
      </div>
    );
  }
}

export default DateDropDown;