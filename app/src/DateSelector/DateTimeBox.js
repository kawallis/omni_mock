import React, {Component} from 'react';
import './DateTimeBox.css';
import DateDropDown from '../components/datedropdown';
import PikadayBox from '../components/pikaday';

class DateTimeBox extends Component {
  constructor(){
    super();
    this.state = {
      slotsView: false
    }
    this.showSlots = this.showSlots.bind(this);
    this.findPrices = this.findPrices.bind(this);
  }

    componentDidMount () {
    const { addDates } = this.props;
    let settings = {
      method: 'GET',
      headers: new Headers({ 'Content-Type': 'application/json' })
    };
    fetch('/api/timeslots', settings)
    .then(res => res.json())
    .then(res => {
      let arr = res.map(item => {
        return {timestamp: new Date(item.timestamp*1000), price: item.price}
      })
      addDates(arr);
    });
  }

  showSlots() {
      let { slotsView } = this.state;
      slotsView = slotsView ? false : true;
      this.setState({ slotsView: slotsView })
  }

  findPrices(date) {
    const { availableTimes } = this.props;
    Date.prototype.addDays = function(days) {
      var dat = new Date(this.valueOf());
      dat.setDate(dat.getDate() + days);
      return dat;
    }
    let arr = availableTimes.filter(item => {
      return (item.timestamp >= date && item.timestamp <= date.addDays(1)); 
    });
    console.log(arr);
    // let settings = {
    //   method: 'GET',
    //   headers: new Headers({ 'Content-Type': 'application/json' })
    // };
    // fetch(`/api/timeslots/${date}`, settings)
    // .then(res => res.json())
    // .then(res => {
    //   changeDates(res);
    // //TODO
    // });
  }

  render() {
    let {date, time, availableTimes, showSlots} = this.props;
    return (
      <div className="DateTimeBox">
        <h1>Choose Date & Time</h1>
        <div className="SelectorContainer">
          <PikadayBox 
          date={date} findPrices={this.findPrices}/>
          <DateDropDown text={time}
          availableTimes={availableTimes} 
          showSlots={this.showSlots}
          slotsView={this.state.slotsView}/>
        </div>
      </div>
    );
  };
};

export default DateTimeBox;