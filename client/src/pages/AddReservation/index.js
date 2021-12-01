import React, { useState } from 'react';
import './index.css'
import { Container, Button, Row, Col, ProgressBar } from 'react-bootstrap';
import ReservationPage1 from '../../components/ReservationPage1';
import ReservationPage2 from '../../components/ReservationPage2';
import ReservationPage3 from '../../components/ReservationPage3';


function AddReservation() {

  const [page, setPage] = useState(1);
  
  const [userData, setUserData] = useState({
    _id: '', 
    phone: '',
    displayName: '', 
  });

  const [newReservation, setNewReservation] = useState({
    customerId: "",
    checkerId: "",
    checkIn: "",
    confirmationKey: "",
    hotel: {
      name: "",
      street1: "",
      street2: "",
      city: "",
      state: "",
      zip: ""
    },
    options: [],
    instructions: "",

    
  });

  const [packageData, setPackageData] = useState({
    title: '',
    imageUrl: '',
    cost: 0,
    description: ''
  })

  function nextPage() {
    if (page === 3) return;
    setPage((page) => page + 1);
  }

  function goBack() {
    setPage((page) => page - 1);
  }

  function goBackHotel() {
    setHotelData(blankHotel);
    goBack();
  }

  // function for useMutation that adds a reservation, 
  // to be executed upon submit payment button on page 4

  console.log(`the current page is ${page}`);
  console.log(`the current package selection information is ${JSON.stringify(packageData)}`);
  console.log(`the current hotel data information is ${JSON.stringify(hotelData)}`);
  console.log(`the current user data is ${JSON.stringify(userData)}`);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col sm="8" >
          <h1 className="title">Add a Reservation</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col sm="10" md="7" >
          <ProgressBar className="progress" striped variant="warning" max="4" now={page} label={`STEP  ${page}`} />
        </Col>
      </Row>
        {page === 1 && 
          <ReservationPage1 
            setPackageData={setPackageData}
            nextPage={nextPage}
          />
        }
        {page === 2 && 
          <ReservationPage2 
            setHotelData={setHotelData}
            hotelData={hotelData}
            nextPage={nextPage}
          />
        }
        {page === 3 && 
          <ReservationPage3 
            hotelData={hotelData}
            packageData={packageData}
          />}
        {(page === 2 || page === 4) && 
          <Button className="next-btn" onClick={goBack}>Go Back</Button>
        } 
        {page === 3 && 
          <Button className="next-btn" onClick={goBackHotel}>Go Back</Button> // Should this be near page === 3 ?
        } 
    </Container> 
  )
}
export default AddReservation;
