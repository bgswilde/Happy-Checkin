import React, { useEffect, useRef } from 'react';
import { QUERY_RESERVATIONS } from "../../utils/queries";
import { useQuery } from '@apollo/client';
import { Container, Row, Col } from 'react-bootstrap';
import DashboardExplainer from '../../components/DashboardExplainer';
import ReservationList from '../../components/ReservationList';
import Auth from '../../utils/auth';
import './index.css'

function CustomerDashboard () {
  const activeReservations = useRef();
  const completeReservations = useRef();
  const { loading: customerLoading, data: customerData } = useQuery(QUERY_RESERVATIONS, {
    variables: {
      userId: Auth.getID()
    }
  });

  const displayName = Auth.getDisplayName();

  if (!customerLoading && customerData?.reservations) {
    activeReservations.current = customerData.reservations.filter(r => r.status === '');
    completeReservations.current = customerData.reservations.filter(r => r.status === 'completed');
  }

  useEffect(()=> {
    if (!customerLoading && customerData?.reservations) {
      activeReservations.current = customerData.reservations.filter(r => r.status === '');
      completeReservations.current = customerData.reservations.filter(r => r.status === 'completed');
    }
  }, [customerData])
  
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
          <ReservationList title="Active Reservations" reservations={activeReservations.current} klass="active-list"/>
        </Col>
        <Col md="6">
          <ReservationList title="Reservation History" reservations={completeReservations.current} klass="completed-list"/>
        </Col>
      </Row>
    </Container>
  )
}
export default CustomerDashboard;