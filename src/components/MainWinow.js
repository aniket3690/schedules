import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import '../css/mainWindow.css';

class MainWinow extends Component {
  render() {
    return (

      <div className='main-window'>
        <div className='header'>
          <span className='header-icon'><FontAwesomeIcon icon={faSun} size="lg" /></span>
          <span className='header-name'>My day
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip id="button-tooltip-2">List option menu</Tooltip>}
            ><span className='header-option'><FontAwesomeIcon icon={faEllipsis} size="mg" /></span></OverlayTrigger >
          </span>
        </div>
      </div >

    );
  }
}

export default MainWinow;