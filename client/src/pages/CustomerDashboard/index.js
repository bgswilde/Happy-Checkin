import React, { useState } from 'react';
import { Container, Row, Col, Button, Collapse, Card,  Modal } from 'react-bootstrap';
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
        <div className="mx-2 my-3">
          <Button 
            onClick={() => setOpen(!open)}
            onBlur={() => setOpen(!open)}
            aria-controls="collapse-me"
            aria-expanded={open}
            className="btn-active-reservation w-100"
          >
            This is where the basic information of the reservation goes
          </Button>
          <Collapse in={open}>
            <Card className="customer-card" id="collapse-me">
              <Card.Body id="collapse-me">
                <p>Expended it shows more detailed information of the reservation</p>
              </Card.Body>
            </Card>
          </Collapse>
        </div>

        <div className="mx-2 my-3">
          <Button 
            onClick={() => setOpen(!open)}
            onBlur={() => setOpen(!open)}
            aria-controls="collapse-me2"
            aria-expanded={open}
            className="btn-active-reservation w-100"
          >
            This is where the basic information of the reservation goes
          </Button>
          <Collapse in={open}>
            <Card className="customer-card" id="collapse-me">
              <Card.Body id="collapse-me2">
                <p>Expended it shows more detailed information of the reservation</p>
              </Card.Body>
            </Card>
          </Collapse>
        </div>

      </Col>
      
      <Col md="1"></Col>
      
      <Col md="5" className="ml-3 completed-list">
        <h2>Completed Reservations</h2>
        <div className="mx-2 my-3">
          <Button 
            onClick={() => setOpen(!open)}
            onBlur={() => setOpen(!open)}
            aria-controls="collapse-me2"
            aria-expanded={open}
            className="btn-completed-reservation w-100"
          >
            This is where the basic information of the reservation goes
          </Button>
          <Collapse in={open}>
            <Card className="completed-card" id="collapse-me">
              <Card.Body id="collapse-me2">
                <p>Expended it shows more detailed information of the reservation</p>
              </Card.Body>
            </Card>
          </Collapse>
        </div>
        
        {/* <div className="completed-area">
          <Button className="completed-modal" onClick={modalToggle}>
            Your completed reservation for review!
          </Button>
          <Modal isOpen={modal}>
            <Modal.Header toggle={modalToggle}>
              The Reservation
            </Modal.Header>
            <Modal.Body>
              something about it being completed
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={function noRefCheck(){}}>Leave a review</Button>
              {' '}
              <Button onClick={function noRefCheck(){}}>Clear Res</Button>
            </Modal.Footer>
          </Modal>
        </div> */}
      </Col>
    </Row>
  </Container>
  )
}
export default CustomerDashboard;