import React, { useState, useEffect } from 'react';
import './index.css'
import { Container, Button, Row, Col, ProgressBar } from 'react-bootstrap';
import ReservationPage1 from '../../components/ReservationPage1';
import ReservationPage2 from '../../components/ReservationPage2';
import ReservationPage3 from '../../components/ReservationPage3';


function Reservation() {
  const [page, setPage] = useState(1);
  
  const [userData, setUserData] = useState({
    userId: '',
    firstName: '',
    lastName: '',
    email: ''
  });

  const [hotelData, setHotelData] = useState({
    hotelName: '',
    hotelAddress1: '',
    hotelCity: '',
    hotelState: '',
    hotelZip: '',
    checkinDate: '',
    options: [],
    instructions: ''
  });

  const [packageData, setPackageData] = useState({
    name: '',
    price: ''
  })

  function nextPage() {
    if (page === 3) return;
    setPage((page) => page + 1);
  }

  function goBack() {
    setPage(1);
  }

  // function updateData(type, newData) {
  //   setReservationData((reservationData) => {
  //     return { ...reservationData, [type]: newData };
  //   });
  // }

  console.log(`the current page is ${page}`);
  console.log(`the current package selection information is ${JSON.stringify(packageData)}`);
  console.log(`the current hotel data information is ${JSON.stringify(hotelData)}`);
  console.log(`the current user data is ${JSON.stringify(userData)}`);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col sm="5" >
          <ProgressBar class="progress" striped variant="warning" max="4" now={page} />
        </Col>
      </Row>
        {page === 1 && 
          <ReservationPage1 
            setPackageData={setPackageData}
            packageData={packageData}
            nextPage={nextPage}
            setPage={setPage}
            page={page}
          />
        }
        {page === 2 && 
          <ReservationPage2 
            setHotelData={setHotelData}
            hotelData={hotelData}
            nextPage={nextPage}
            setPage={setPage}
            page={page}
          />
        }
        {page === 3 && <ReservationPage3 />}

        {page !== 3 && <Button className="next-btn" onClick={nextPage}>Next</Button>}
        {/* <Button type="submit" onClick={submit}>Looks Great!</Button> */}
        {page === 3 && <Button onClick={goBack}>Go Back</Button>} 
    </Container> 
  )
}
export default Reservation;
