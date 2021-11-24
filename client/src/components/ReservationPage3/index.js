import React from 'react';
import { 
  Row, 
  Col, 
  Container, 
} from 'react-bootstrap';
import Stripe from '../Stripe';
import './index.css'

function ReservationPage3(props) {
  const { hotelData, packageData } = props

  return (
    <Container>
      <Col lg="9" className='form-block p-4'>
        <Row>
            <h3>Verify Your Submitted Information</h3>
        </Row>
        <Row>
            <p>If you like what you see, proceed to checkout on the next page. If not, go back and change your selections!</p>
        </Row>
        <Row className="justify-content-center">
            <Col md="9" className="submitted-info">
              <Row className="data-group">
                {/* this will be used by a query of the package information */}
                <p className="data-heading">Selected Package:</p>
                <p className="package-data">{`${packageData.name} Package, $${packageData.price}`}</p>
              </Row>

              <Row className="data-group">
                <p className="data-heading">Checkin Date and Time:</p>
                <p className="data-details">{`${hotelData.checkinDate}`}</p>
              </Row>

              <Row className="data-group">
                <p className="data-heading">Hotel Name:</p>
                <p className="data-details">{`${hotelData.hotelName}`}</p>
              </Row>

              <Row className="data-group">
                <p className="data-heading">Hotel Address:</p>
                <p className="data-details">{`${hotelData.hotelAddress1}`}</p> 
                {hotelData.hotelAddress2 && <p className="data-details">{`${hotelData.hotelAddress2}`}</p>}
                <p className="data-details">{`${hotelData.hotelCity}, ${hotelData.hotelState} ${hotelData.hotelZip}`}</p>
              </Row>

              <Row className="data-group">
                <p className="data-heading">Hotel Reservation Number:</p>
                <p className="data-details">{`${hotelData.reservationNumber}`}</p>
              </Row>

              <Row className="data-group">
                <p className="data-heading">Checkin Options:</p>
                <ul className="data-details">
                  {hotelData.options.map((option) => {
                    return (
                      <li className="list-item" key={option}>{option}</li>
                    )
                  })}
                </ul>
              </Row>

              <Row className="data-group">
                <p className="data-heading">Special Instructions:</p>
                <p className="data-details">{`${hotelData.instructions}`}</p>
              </Row>

              <Row className="justify-content-center">
                <Col sm="9" md="6" xl="4">
                  <Stripe product_name={`${packageData.name}`} unit_amount={`${packageData.price}00`} quantity={1} />
                </Col>
              </Row>
            </Col>
        </Row>
      </Col>
    </Container>
  )
}

export default ReservationPage3;