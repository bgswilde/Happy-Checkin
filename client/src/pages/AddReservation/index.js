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

  const [addReservation, setAddReservation] = useState({
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

  // Here is my thought...
  //
  // If you update addReservation to match an empty object that matches the data architecture below,
  // we can then pass addReservation and setAddReservation into each ReservationPage. On the submission
  // of each ReservationPage (until the last one...), update state with the new information and advance
  // to the next ReservationPage. On the last ReservationPage, include and useMutation(ADD_MUTATION) 
  // when you are ready to save the reservation. Your form inputs will need to be updated to use the 
  // current data architecture:
  //    On the form elements that are related to hotel, you'll set name as follows:
  //            name="hotel[name]"... 
  //    On the form elements related to package, you'll need to set name as follows:
  //            name="package[title]"... 
  //    On the form elements related to customer, you'll need to set name as follows:
  //            name="customer[_id]"...
  //    On form elements that dont contain a mongoose schema, you can set name as follows:
  //            name="checkInTime"
  // When you submit each component, you can then use the same handleSubmit pattern as it relates to 
  // updating state. Something you may want to consider is creating a form input component to use on each
  // ReservationPage. Each Form.Group is dangerously the same... so much so that you could pass in props 
  // from the ReservationPage. This creates two benefits: Your ReservationPage is easier to read AND most
  // appropriately, the input component can handle updating state as each input's change (or blur).
  // Going that route also allows us to remove any state handling in the ReservationPages. Making 
  // AddReservation where the state is initiated and then each ReservationPage is simply a component 
  // that's only managing how we display the information.
  // 
  // 

  // STATE NEEDS TO MATCH THE reservation DATA ARCHITECTURE
  // 
  // "reservation": {
  //   "checkInTime": "Dec 12, 2021",
  //   "confirmationKey": "qeramcaii1119un",
  //   "instructions": "Lorem ipsum dolar sit amet",
  //   "customer": {
  //     "_id": "619ed34b68fc535812c93b85"
  //   },
  //   "checker": null,
  //   "package": {
  //     "title": "package",
  //     "imageUrl": "http://example.com/image.jpg",
  //     "cost": 2000,
  //     "description": "product description"
  //   },
  //   "hotel": {
  //     "name": "Sample Hotel",
  //     "street1": "123 Hotel Way",
  //     "street2": "",
  //     "city": "Kansas City",
  //     "state": "KS",
  //     "zip": "66062"
  //   },
  //   "options": {
  //     "towels": true,
  //     "pillows": true,
  //     "down": false,
  //     "rollaway": false,
  //     "ice": true
  //   }
  // }

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
