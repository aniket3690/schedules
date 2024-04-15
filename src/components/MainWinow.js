import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faEllipsis, faArrowDownShortWide, faLayerGroup, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button'
import '../css/mainWindow.css';
import Inputbox from './Inputbox';

class MainWinow extends Component {
  render() {
    return (
      <div className='main-window'>
        <div className='header'>
          <span className='header-icon'><FontAwesomeIcon icon={faSun} size="lg" /></span>
          <span className='header-name'>My day
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip id="tooltip">List option menu</Tooltip>}
            ><span className='header-option'><FontAwesomeIcon icon={faEllipsis} size="mg" /></span></OverlayTrigger >
          </span>
          <span className='header-date'>Thursday, April 11</span>
          <div className='d-flex header-utils'>
            <div className='util'>
              <Button className='util-content'><span className='util-icon'><FontAwesomeIcon icon={faArrowDownShortWide} size="lg" /></span><span className='util-text'>Sort</span></Button>
            </div>
            <div className='util'>
              <Button className='util-content'><span className='util-icon'><FontAwesomeIcon icon={faLayerGroup} size="lg" /></span><span className='util-text'>Group</span></Button>
            </div>
            <div className='util'>
              <Button className='util-content'><span className='util-icon'><FontAwesomeIcon icon={faLightbulb} size="lg" /></span><span className='util-text'>Suggesion</span></Button>
            </div>
          </div>
          <Inputbox />
        </div>
      </div >
    );
  }
}

export default MainWinow;