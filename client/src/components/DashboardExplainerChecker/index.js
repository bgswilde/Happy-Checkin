import React from "react";
import { Row, Col, Button } from 'react-bootstrap';

const DashboardExplainer = () => {
  const Reservation = () => {
    window.location.assign('/reservation');
  }

  return (
    <Row className="dashboard explainer">
      <Col lg="10" className="form-card log-container">
        <h4 className="mt-3">Let's make some Happy Checkins!</h4>
        <p className="dash-details">Pay close attention to customer requests, let your supervisor know if you have questions.</p>
        <p className="dash-details">Click <span className="dash-active">CLAIM</span> on a reservation in the <span className="dash-active">AVAILABLE</span> block to claim it. </p>
        <p className="dash-details">Click <span className="dash-completed">COMPLETE</span> on a reservation in the <span className="dash-completed">MY RESERVATIONS</span> block when checkin is complete. </p>
      </Col>
    </Row>
  );
};

export default DashboardExplainer;

