import React from 'react';
import { 
  Row, 
  Col, 
  Container, 
  ListGroup, 
  ListGroupItem, 
} from 'react-bootstrap';
import './index.css'

function ReservationPage3(props) {
  const { hotelData } = props

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
                <p className="data-heading">Hotel Name:</p>
                <p>{`${hotelData.hotelName}`}</p>
              </Row>
            </Col>
        </Row>
        <Row className="justify-content-center">
            <Col md="9" className="submitted-info">
              <Row className="data-group">
                <p className="data-heading">Hotel Address:</p>
                <p>{`${hotelData.hotelAddress1}`}</p>
                {!hotelData.hotelAddress2 ? <p>{`${hotelData.hotelCity}, ${hotelData.hotelState} ${hotelData.hotelZip}`}</p> : <div><p>{`${hotelData.hotelAddress2}`}</p><p>{`${hotelData.hotelCity}, ${hotelData.hotelState} ${hotelData.hotelZip}`}</p></div> }
                
              </Row>
            </Col>
        </Row>
      </Col>
    </Container>
  )
}

export default ReservationPage3;