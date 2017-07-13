import React from 'react';
import Pikaday from 'react-pikaday';
import 'pikaday/css/pikaday.css';
import './pikaday.css';
import arrow from '../assets/arrow.svg';

export default function PikadayBox(props) {

  return (
    <div className="PikadayContainer">
        <Pikaday className="PikadayDropDown" placeholder={props.date} onChange={props.findPrices}/>
        <img className="ArrowIcon" src={arrow} alt="" />
    </div>
  );
}