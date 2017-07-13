import React, {Component} from 'react';
import './datedropdown.css';
import arrow from '../assets/arrow.svg';

class DateDropDown extends Component {
  render () {
    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
    let slots = null;
    if ( this.props.slotsView ) {
      slots = <div className="SlotsBox">   
                <ul className="DatesContainer">
                  {this.props.dates.map((time, i) => {
                    return <li className="Times" key={i}>{`${time.timestamp.getHours()} : ${addZero(time.timestamp.getMinutes())}`}<span className="Prices">{time.price}</span></li>;
                  })}
                </ul>  
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