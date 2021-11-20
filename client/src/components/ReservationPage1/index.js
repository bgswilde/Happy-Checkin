import React, { useState } from 'react';
import './index.css'
import { Row, Col, Container, ListGroup, ListGroupItem, Image} from 'react-bootstrap';

function ReservationPage1() {
  const [selectedPackage, setSelectedPackage] = useState('');

  function handleSelect(event) {
    console.log(event.target.name)
    setSelectedPackage(event.target.name)
  }

  return (
    <Container>
      <Col lg="9" className='form-block'>
        <Row>
            <h3>Choose Your Package</h3>
        </Row>
        <Row>
            <p>We don't just check you in, <em>we make sure you're happy</em>. Choose your desired package and pricing below to get started:</p>
        </Row>
        <ListGroup>
          <ListGroupItem className="item odd" name="basic" onClick={handleSelect}>
            <Row className="align-items-center">
              <Col md="6">
                <Image src="./assets/images/hotel-package0-title.png" className="rounded" fluid></Image>
              </Col>
              <Col md="6" className="description">
                <h4>Basic Package: <span className="price">$20</span></h4>
                <p><strong>Includes:</strong></p>
                <ul>
                  <li>No waiting for room keys</li>
                  <li>Needed items (extra towels, pillow, etc.) ready in your room</li>
                  <li>Special Requests handled and ready</li>
                  <li>Complimentary Happy Checkin Sleep Mask</li>
                </ul>
              </Col>
            </Row>
          </ListGroupItem>
          
          <ListGroupItem className="item" name="sweet stay" onClick={handleSelect}>
            <Row>
              <Col md="6">
                <Image src="./assets/images/hotel-package1-title.png" className="rounded" fluid></Image>
              </Col>
              <Col md="6" className="description">
                <h4>Sweet Stay Package: <span className="price">$35</span></h4>
                <p><strong>Includes:</strong></p>
                <ul>
                  <li><em><strong>Everything from Basic Package</strong></em></li>
                  <li>A basket of assorted candy</li>
                  <li><em>no cheap off-brand candy...</em></li>
                </ul>
              </Col>
            </Row>
          </ListGroupItem>

          <ListGroupItem className="item odd" name="charcuterie" onClick={handleSelect}>
            <Row>
              <Col md="6">
                <Image src="./assets/images/hotel-package2-title.png" className="rounded" fluid></Image>
              </Col>
              <Col md="6" className="description">
                <h4>Charcuterie Package: <span className="price">$70</span></h4>
                <p><strong>Includes:</strong></p>
                <ul>
                  <li><em><strong>Everything from Basic Package</strong></em></li>
                  <li>High-quality meats, cheeses, and other essentials</li>
                  <li>Platter/Board for display</li>
                </ul>
              </Col>
            </Row>
          </ListGroupItem>

          <ListGroupItem className="item" name="honeymoon" onClick={handleSelect}>
            <Row>
              <Col md="6">
                <Image src="./assets/images/hotel-package3-title.png" className="rounded" fluid></Image>
              </Col>
              <Col md="6" className="description">
                <h4>Honeymoon Package: <span className="price">$100</span></h4>
                <p><strong>Includes:</strong></p>
                <ul>
                  <li><em><strong>Everything from Basic Package</strong></em></li>
                  <li>Romantic candles</li>
                  <li>Rose pedals laid out</li>
                  <li>Champagne and Chocolates</li>
                  <li>Luxurious Bubble Bath</li>
                </ul>
              </Col>
            </Row>
          </ListGroupItem>
        </ListGroup>
        {selectedPackage &&
          <h4>You selected the {selectedPackage} package!</h4>
        } 
      </Col>
    </Container>
  )
}

export default ReservationPage1;