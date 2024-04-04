import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import InputGroup from "react-bootstrap/InputGroup";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { bgColors } from '../components/colors.js'
import '../css/commonNav.css';

class CommonNav extends Component {
  render() {
    return (
      <Navbar className="commonnav text-light"
        style={{ backgroundColor: bgColors.Default }}>
        <div className="brand-icon">
          <FontAwesomeIcon icon={faListCheck} size="lg" style={{ margin: '10 10 10 15' }} />
          <Navbar.Brand href="#home" className="brand-name text-light">
            <span className="brand-name">Schedules</span>
          </Navbar.Brand>
        </div>

        <div className="search">
          <Form>
            <InputGroup>
              <InputGroup.Text id="search-icon">
                <FontAwesomeIcon icon={faSearch} size="mg" />
              </InputGroup.Text>
              <Form.Control
                id="search-box"
                size="sm"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Form>
        </div>

        <div className="nav-right">
          <Button className="user-icon border-0 " style={{ backgroundColor: 'transparent' }}>
            <FontAwesomeIcon icon={faGear} size="lg" /></Button>
          <Button className="user-icon border-0" style={{ backgroundColor: 'transparent' }}>
            <FontAwesomeIcon icon={faQuestion} size="lg" /></Button>
          <Button className="user-icon border-0" style={{ backgroundColor: 'transparent' }}>
            <FontAwesomeIcon icon={faBullhorn} size="lg" /></Button>
          <Button className="user-icon border-0" style={{ backgroundColor: 'transparent' }}>
            <FontAwesomeIcon icon={faUser} size="lg" /></Button>
        </div>
      </Navbar>
    );
  }
}

export default CommonNav;
