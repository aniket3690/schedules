import React, { Component } from 'react';
import { toggleSidebar } from '../js/commonSlider.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";

class MainWinow extends Component {
  render() {
    return (
      <div className='main-window'>
        <div className='closer' onClick={toggleSidebar}><FontAwesomeIcon icon={faSliders} size="lg" /></div>
        Take note
      </div>
    );
  }
}

export default MainWinow;