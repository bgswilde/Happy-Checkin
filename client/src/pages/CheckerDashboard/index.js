import React, { useEffect, useRef } from 'react';
import { QUERY_ALL_RESERVATIONS } from "../../utils/queries";
import { useQuery } from '@apollo/client';
import { Container, Row, Col } from 'react-bootstrap';
import DashboardExplainerChecker from '../../components/DashboardExplainerChecker';
import ReservationList from '../../components/ReservationList';
import Auth from '../../utils/auth';
import './index.css'

function CheckerDashboard () {
  const unclaimedReservations = useRef();
  const completeReservations = useRef();
  const { loading: reservationsLoading, data: reservationData } = useQuery(QUERY_ALL_RESERVATIONS, {});

  const displayName = Auth.getDisplayName();

  if (!reservationsLoading && reservationData?.reservations) {
    unclaimedReservations.current = reservationData.reservations.filter(r => r.checker._id !== undefined);
    completeReservations.current = reservationData.reservations.filter(r => r.status === 'completed');
  }

  useEffect(()=> {
    if (!reservationsLoading && reservationData?.reservations) {
      unclaimedReservations.current = reservationData.reservations.filter(r => r.checker._id !== undefined);
      completeReservations.current = reservationData.reservations.filter(r => r.status === 'completed');
    }
  }, [reservationData])
  
  return (
    <Container className="dashboard reservation">
       <Row className="dashboard welcome justify-content-center">
        <Col sm="8">
          <h1 className="title">Checker {displayName}'s Dashboard</h1>
        </Col>
      </Row>
      <DashboardExplainerChecker />
      <Row>
        <Col md="6">
          <ReservationList title="Active Reservations" reservations={unclaimedReservations.current} klass="active-list"/>
        </Col>
        <Col md="6">
          <ReservationList title="Reservation History" reservations={completeReservations.current} klass="completed-list"/>
        </Col>
      </Row>
    </Container>
  )
}

export default CheckerDashboard;