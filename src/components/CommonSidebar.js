import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faUserGroup, faPaperclip, faEnvelope, faStar, faCalendar, faUser, faHome, faCheck, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import '../css/commonSideBar.css';

function ListItem({ icon, text, sidebarClosed }) {
  return (
    <span className={`list-item-icon ${sidebarClosed ? 'closed' : ''}`}>
      <FontAwesomeIcon icon={icon} size="lg" />
      <span className={`mx-4 list-item-name ${sidebarClosed ? 'closed' : ''}`}>{text}</span>
    </span>
  );
}

function CommonSidebar() {
  const [sidebarClosed, setSidebarClosed] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarClosed(!sidebarClosed);
  };

  return (
    <div className={`sidebar ${sidebarClosed ? 'closed' : ''}`}>
      <div className='closer' onClick={handleToggleSidebar}><FontAwesomeIcon icon={faAngleRight} size="lg" /></div>
      <Tab.Container id="list-group-tabs-example border-0" defaultActiveKey="#link1">
        <Row>
          <Col sm={15}>
            <ListGroup variant="flush">
              <ListGroup.Item className='list-item' action href="#link1">
                <ListItem icon={faSun} text="My Day" sidebarClosed={sidebarClosed} />
              </ListGroup.Item>
              <ListGroup.Item className='list-item' action href="#link2">
                <ListItem icon={faStar} text="Important" sidebarClosed={sidebarClosed} />
              </ListGroup.Item>
              <ListGroup.Item className='list-item' action href="#link3">
                <ListItem icon={faCalendar} text="Planned" sidebarClosed={sidebarClosed} />
              </ListGroup.Item>
              <ListGroup.Item className='list-item' action href="#link4">
                <ListItem icon={faUser} text="Assigned to me" sidebarClosed={sidebarClosed} />
              </ListGroup.Item>
              <ListGroup.Item className='list-item' action href="#link5">
                <ListItem icon={faHome} text="Tasks" sidebarClosed={sidebarClosed} />
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
