import React, { useEffect, useRef } from 'react';
import { QUERY_ALL_RESERVATIONS, QUERY_RESERVATIONS } from "../../utils/queries";
import { useQuery } from '@apollo/client';
import { Container, Row, Col } from 'react-bootstrap';
import DashboardExplainerChecker from '../../components/DashboardExplainerChecker';
import ReservationList from '../../components/ReservationList';
import Auth from '../../utils/auth';
import './index.css'

function CheckerDashboard () {
  const myReservations = useRef();
  const unclaimedReservations = useRef();
  const { loading: checkerLoading, data: checkerData } = useQuery(QUERY_ALL_RESERVATIONS);

  const displayName = Auth.getDisplayName();

  if (!checkerLoading && checkerData?.allReservations) {
    console.log('checkerData.allReservations', checkerData.allReservations)
    unclaimedReservations.current = checkerData.allReservations.filter(r => !r.checker);
    myReservations.current = checkerData.allReservations.filter(r => {
      if (r.checker) {
        if (r.checker._id == Auth.getID()) {
          return true;
        }
      }
      return false;
    });
  }

  useEffect(()=> {
    if (!checkerLoading && checkerData?.allReservations) {
      unclaimedReservations.current = checkerData.allReservations.filter(r => !r.checker);
      myReservations.current = checkerData.allReservations.filter(r => {
        if (r.checker) {
          if (r.checker._id == Auth.getID()) {
            return true;
          }
        }
        return false;
      });
    }
  }, [checkerData])
  
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
          <ReservationList title="Claimed Reservations" reservations={myReservations.current} klass="active-list"/>
        </Col>
        <Col md="6">
          <ReservationList title="Unclaimed Reservations" reservations={unclaimedReservations.current} klass="completed-list"/>
        </Col>
      </Row>
    </Container>
  )
}

export default CheckerDashboard;