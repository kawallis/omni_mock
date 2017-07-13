import React, {Component} from 'react';
import './datedropdown.css';
import arrow from '../assets/arrow.svg';

class DateDropDown extends Component {

  render () {
    let slots = null;
    console.log(this.props.dates);
    if ( this.props.slotsView ) {
      slots = <div className="SlotsBox">
              { this.props.dates.map((time, i) => {
                return (
    
                    <p key={i}>{time.timeslot}</p>

                );
              })}
              </div>
    }else {
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