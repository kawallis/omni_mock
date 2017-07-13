import React from 'react';
import image from '../assets/logo.png';
import './navbar.css';

export default function NavBar() {

  return (
    <div className="NavBarContainer">
      <img className="logo" src={image} alt=""/>
    </div>
  );
}