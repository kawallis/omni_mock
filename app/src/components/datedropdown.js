import React from 'react';
import './datedropdown.css';
import arrow from '../assets/arrow.svg';

export default function DateDropDown(props) {

  return (
    <div className="DateDropDownContainer">
      <h3>{props.text}</h3>
      <img className="ArrowIcon" src={arrow} alt="" />
    </div>
  );
}