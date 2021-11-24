import React from "react";
import { Row, Col, Button } from 'react-bootstrap';

const DashboardExplainer = () => {
  const Reservation = () => {
    window.location.assign('/reservation');
  }

  return (
    <Row className="dashboard explainer">
      <Col lg="10" className="form-card log-container">
        <h4 className="mt-3">Your reservations await here!</h4>
        <p className="dash-details"><span className="dash-first">When</span> you add a new reservation, it will be added to your <span className="dash-active">Active Reservations</span> group, and our high-quality Checkers from Happy Checkin will be notified!</p>
        <p className="dash-details"><span className="dash-first">Click</span> an active reservation to check on your reservation details and if a Checker has been assigned to your reservation. </p>
        <p className="dash-details"><span className="dash-first">When</span> a Checker has checked you in, you can see your history and leave feedback in the <span className="dash-completed">Completed Reservations</span> group.</p>
        <p className="dash-details"><span className="dash-first">If your</span> Checker has checked you in, skip the line at your hotel desk, get your keys immediately, and enjoy a happy stay!</p>
        <div>
          <Button block size="lg" className="add-btn mb-3" onClick={Reservation}>Add A New Reservation!</Button>
        </div>
      </Col>
    </Row>
  );
};

export default DashboardExplainer;

