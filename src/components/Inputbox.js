import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCalendar, faBell, faRepeat } from "@fortawesome/free-solid-svg-icons";
import Form from 'react-bootstrap/Form';
import "../css/inputbox.css";
import Button from 'react-bootstrap/Button';

class Inputbox extends Component {
  render() {
    return (
      <div className='input-box'>
        <div className='input-box-upper'>
          <span className='task-bullet'><FontAwesomeIcon icon={faCircle} size="mg" /></span>
          <span className='task-box'>
            <Form>
              <Form.Group>
                <Form.Control className='form-box' type="text" placeholder="Add a task" />
              </Form.Group>
            </Form>
          </span>
        </div>
        <div className='input-box-middle'></div>
        <div className='input-box-lower'>
          <span className='inner-box-lower-options-left'>
            <span className='icon'><FontAwesomeIcon icon={faCalendar} size="mg" /></span>
            <span className='icon'><FontAwesomeIcon icon={faBell} size="mg" /></span>
            <span className='icon'><FontAwesomeIcon icon={faRepeat} size="mg" /></span>
            <span className='inner-box-lower-options-right'><Button className='btn-add' size='sm'>Add</Button></span>
          </span>
        </div>
      </div>
    );
  }
}

export default Inputbox;