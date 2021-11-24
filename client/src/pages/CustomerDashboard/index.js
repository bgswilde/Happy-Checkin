import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DashboardExplainer from '../../components/DashboardExplainer';
import ReservationList from '../../components/ReservationList';
import './index.css'

function CustomerDashboard () {
  const sampleReservation = {
    createdAt: "",
    claimedAt: "",
    completedAt: "",
    customer: {},
    checker: {},
    package: {},
    hotel: {
      name: "Sample Hotel",
      street1: "123 Hotel Way",
      street2: "",
      city: "Hotelville",
      state: "KS",
      zip: "99076"
    },
    feedback: {},
    checkIn: "",
    confirmationKey: "AbCGe45Jk",
    instructions: "Lorem ipsum dolar sit amet.",
    options: {},
    status: "active"
  }

  // user.displayName
  const displayName = "Mike Rotch";
  // users active reservations
  const activeReservations = [sampleReservation, sampleReservation, sampleReservation];
  // users complete reservations
  const completeReservations = [sampleReservation, sampleReservation, sampleReservation];

  return (
    <Container className="dashboard customer">
       <Row className="dashboard welcome justify-content-center">
        <Col sm="8">
          <h1 className="title">{displayName}'s Dashboard</h1>
        </Col>
      </Row>
      <DashboardExplainer />
      <Row>
        <Col md="6">
          <ReservationList title="Active Reservations" reservations={activeReservations} klass="active-list"/>
        </Col>
        <Col md="6">
          <ReservationList title="Reservation History" reservations={completeReservations} klass="completed-list"/>
        </Col>
      </Row>
    </Container>
  )
}
export default CustomerDashboard;