import React from 'react';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import '../css/commonSideBar.css';
import '../js/commonSlider.js';
import { toggleSidebar } from '../js/commonSlider.js';

function CommonSidebar() {
  return (
    <div className='sidebar'>
      <div className='closer' onClick={toggleSidebar}><FontAwesomeIcon icon={faSliders} size="lg" /></div>
      <Tab.Container id="list-group-tabs-example border-0" defaultActiveKey="#link1">
        <Row>
          <Col sm={15}>
            <ListGroup variant="flush">
              <ListGroup.Item className='list-item' action href="#link1">
                <span className='list-item-icon'><FontAwesomeIcon icon={faSun} size="lg" /><span className='mx-4 list-item-name'>My Day</span></span>
              </ListGroup.Item>
              <ListGroup.Item className='list-item' action href="#link2">
                <span className='list-item-icon'><FontAwesomeIcon icon={faStar} size="lg" /><span className='mx-4 list-item-name'>Important</span></span>
              </ListGroup.Item>
              <ListGroup.Item className='list-item' action href="#link3">
                <span className='list-item-icon'><FontAwesomeIcon icon={faCalendar} size="lg" /><span className='mx-4 list-item-name'>Planned</span></span>
              </ListGroup.Item>
              <ListGroup.Item className='list-item' action href="#link4">
                <span className='list-item-icon'><FontAwesomeIcon icon={faUser} size="lg" /><span className='mx-4 list-item-name'>Assigned to me</span></span>
              </ListGroup.Item>
              <ListGroup.Item className='list-item' action href="#link5">
                <span className='list-item-icon'><FontAwesomeIcon icon={faHome} size="lg" /><span className='mx-4 list-item-name'>Tasks</span></span>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Tab.Container>
      <div className='sidebar-bot'>
        <span className='bot-icons'><FontAwesomeIcon icon={faEnvelope} size="lg" /></span>
        <span className='bot-icons'><FontAwesomeIcon icon={faCalendar} size="lg" /></span>
        <span className='bot-icons'><FontAwesomeIcon icon={faUserGroup} size="lg" /></span>
        <span className='bot-icons'><FontAwesomeIcon icon={faPaperclip} size="lg" /></span>
        <span className='bot-icons'><FontAwesomeIcon icon={faCheck} size="lg" /></span>
      </div>
    </div>
  );
}

export default CommonSidebar;