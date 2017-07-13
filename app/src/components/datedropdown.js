import React, {Component} from 'react';
import './datedropdown.css';
import arrow from '../assets/arrow.svg';

class DateDropDown extends Component {

  render () {
    let slots = null;
    if ( this.props.slotsView ) {
      slots = <div className="SlotsBox">
              { this.props.availableTimes.map(time => {
                return (
                  <div>
                    <p>{time.time}</p>
                    <p>{time.price}</p>
                  </div>
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
          <h3>{this.props.text}</h3>
          <img className="ArrowIcon" src={arrow} alt="" />
        </div>
        {slots}
      </div>
    );
  }
}

export default DateDropDown;