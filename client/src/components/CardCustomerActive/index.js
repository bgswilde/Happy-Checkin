import React from "react";
import { Button, Collapse, Card } from 'react-bootstrap';
import './index.css';

function CardCustomerActive(props) {
  const { open, setOpen} = props;
  return (
    <div className="mx-2 my-3">
          <Button 
            onClick={() => setOpen(!open)}
            onBlur={() => setOpen(!open)}
            aria-controls="collapse-me"
            aria-expanded={open}
            className="btn-active-reservation w-100"
          >
          <span className="unclaimed">Pending Checker</span>  November 30, 2021  |  Holiday Inn Express
          </Button>
          <Collapse in={open}>
            <Card className="customer-card" id="collapse-me">
              <Card.Body id="collapse-me">
                <p className="details"><span className="detail-title">Time: </span>11/30/21 6:00PM CST</p>
                <p className="details"><span className="detail-title">Hotel: </span>Holiday Inn Express</p>
                <p className="sub-details">Address Line 1</p>
                <p className="sub-details">Address Line 2</p>
                <p className="sub-details">City, State Zip</p>
                <p className="details"><span className="detail-title">Reservation #: </span>626199870019240192</p>
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

export default CardCustomerActive