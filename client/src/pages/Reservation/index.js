import React, { useState, useEffect } from 'react';
import './index.css'
import { Container, Button, Row, Col, ProgressBar } from 'react-bootstrap';
import ReservationPage1 from '../../components/ReservationPage1';
import ReservationPage2 from '../../components/ReservationPage2';
import ReservationPage3 from '../../components/ReservationPage3';


function Reservation() {
  const [page, setPage] = useState(1);
  const [reservationData, setReservationData] = useState({
    package: {},
    options: {},
    details: {}
  });

  function nextPage() {
    if (page === 3) return;
    setPage((page) => page + 1);
  }

  function goBack() {
    setPage(1);
  }

  function updateData(type, newData) {
    setReservationData((reservationData) => {
      return { ...reservationData, [type]: newData };
    });
  }

  return (
    <Container>
        {page === 1 && <ReservationPage1 />}
        {page === 2 && <ReservationPage2 />}
        {page === 3 && <ReservationPage3 />}

        <Row className="justify-content-center">
          <Col sm="5" >
            <ProgressBar class="progress" striped variant="warning" max="4" now={page} />
          </Col>
        </Row>
        {page !== 3 && <Button className="next-btn" onClick={nextPage}>Next</Button>}
        {/* <Button type="submit" onClick={submit}>Looks Great!</Button> */}
        {page === 3 && <Button onClick={goBack}>Go Back</Button>} 
    </Container> 
  )
}
export default Reservation;
