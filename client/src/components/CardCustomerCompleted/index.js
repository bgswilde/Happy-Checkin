import React from "react";
import { Button, Collapse, Card } from 'react-bootstrap';
import './index.css';

function CardCustomer(props) {
  const { open, setOpen} = props;
  return (
    <div className="mx-2 my-3">
          <Button 
            onClick={() => setOpen(!open)}
            onBlur={() => setOpen(!open)}
            aria-controls="collapse-me"
            aria-expanded={open}
            className="btn-completed-reservation w-100"
          >
          <span className="completed">Completed</span>  November 30, 2021  |  Holiday Inn Express
          </Button>
          <Collapse in={open}>
            <Card className="customer-card" id="collapse-me">
              <Card.Body id="collapse-me">
              <p className="details"><span className="detail-title">Checker: </span>Yo Name</p>
                <p className="details"><span className="detail-title">Completion Date: </span>11/30/21 6:05PM CST</p>
                <p className="details"><span className="detail-title">Hotel: </span>Holiday Inn Express</p>
                <p className="sub-details">Address Line 1</p>
                <p className="sub-details">Address Line 2</p>
                <p className="sub-details">City, State Zip</p>
                <p className="details"><span className="detail-title">Options: </span>
                  <ul className="option-details">
                    <li>first option</li>
                    <li>second option</li>
                  </ul>
                </p>
                <p className="instructions"><span className="detail-title">Instructions: </span>All of my special instructions go here!</p>
              </Card.Body>
            </Card>
          </Collapse>
        </div>
  )

}

export default CardCustomer