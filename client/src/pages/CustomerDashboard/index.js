import React, { useState } from 'react';
import { Container, Row, Col, Button, Collapse, Card,  Modal } from 'react-bootstrap';
import CardCustomerCompleted from '../../components/CardCustomerCompleted';
import CardCustomerActive from '../../components/CardCustomerActive';
import './index.css'

function CustomerDashboard () {
  const [open, setOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [modal, setModal] = useState(false);

  const toggle = () => setOpen(!open);
  const toggle1 = () => setIsOpen1(!isOpen1);

  const handleBlur = () => setOpen(false);
  const handleBlur1 = () => setIsOpen1(false);

  const modalToggle = () => setModal(!modal);

  const Reservation = () => {
    window.location.assign('/reservation');
  }

  const { data } = useQuery(QUERY_JOBS);

  const jobs = data?.jobs || []

  if (!jobs.length) {
    console.log(jobs);
  }
  console.log(jobs)
  return (
  <Container>
    <Row className="justify-content-center">
      <Col sm="8">
        <h1 className="title">displayName's Dashboard</h1>
      </Col>
    </Row>
    <Row>
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
    <Row className="mt-5">
      <Col md="6" className="active-list">
        <h2>Active Reservations</h2>
        {/* map out jobs for all jobs by user id and not completed */}
        <CardCustomerActive 
          open={open}
          setOpen={setOpen}
        />
      </Col>
      
      <Col md="1"></Col>
      
      <Col md="5" className="ml-3 completed-list">
        {/* map out jobs for all jobs by user id and completed */}
        <h2>Completed Reservations</h2>
        <CardCustomerCompleted 
          open={open}
          setOpen={setOpen}
        />
      </Col>
    </Row>
  </Container>
  )
}
export default CustomerDashboard;