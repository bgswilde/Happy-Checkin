import React, { useState } from "react";
import { Button, Collapse, Card } from 'react-bootstrap';

function ReservationItem(props) {
  const [open, setOpen] = useState(false);

  return (
      <div className="reservation-wrapper col-md-4">
        <Button 
          onClick={() => setOpen(!open)}
          onBlur={() => setOpen(!open)}
          aria-controls="collapse-me"
          aria-expanded={open}
          className="btn-active-reservation w-100"
        >
        <span className="unclaimed">
          {props.status}
        </span>
          November 30, 2021  |  {props.hotel.name}
        </Button>
        <Collapse in={open}>
          <Card className="customer-card" id="collapse-me">
            <Card.Body id="collapse-me">
              <p className="details">
                <span className="detail-title">
                  Time:
                </span>
                {props.checkIn}
                </p>
              <p className="details">
                <span className="detail-title">
                  Hotel:
                </span>
                {props.hotel.name}
              </p>
              <p className="sub-details">
                {props.hotel.street1}
              </p>
              {
                props.hotel.street2 && (
                  <p className="sub-details">
                    {props.hotel.street2}
                  </p>
                )
              }
              <p className="sub-details">
                {props.hotel.city}, {props.hotel.state} {props.hotel.zip}
              </p>
              <p className="details">
                <span className="detail-title">
                  Reservation #:
                </span>
                {props.confirmationKey}
              </p>
              <p className="details">
                <span className="detail-title">
                  Options: 
                </span>
                <ul className="option-details">
                  {/* {props.options} */}
                  <li>first option</li>
                  <li>second option</li>
                </ul>
              </p>
              <p className="instructions">
                <span className="detail-title">Instructions: </span>
                {props.instructions}
              </p>
            </Card.Body>
          </Card>
        </Collapse>
      </div>
  );
}

export default ReservationItem;