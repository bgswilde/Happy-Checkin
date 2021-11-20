import React, { useState } from 'react';
import './index.css'
import { 
  Row, 
  Col, 
  Container, 
  ListGroup, 
  ListGroupItem, 
  Image, 
  Button 
} from 'react-bootstrap';

function ReservationPage1(props) {
  const {
    setPackageData,
    packageData,
    nextPage,
    setPage,
    page
  } = props; 

  function handleChoice(selection) {
    console.log(`I clicked the button to select option ${selection}`);
    // useMutation for getting the package data for name and price
    // selection as the data is just to see if the prop works for now
    setPackageData({
      name: selection,
      price: selection
    })
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
          <ListGroupItem className="item odd">
            <Row className="align-items-center">
              <Col md="6">
                <Image src="./assets/images/hotel-package1-title.png" className="rounded" fluid></Image>
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
                <Button className="choice-btn choice-1" onClick={() => handleChoice(1)}>Choose This Package</Button>
              </Col>
            </Row>
          </ListGroupItem>
          
          <ListGroupItem className="item">
            <Row>
              <Col md="6">
                <Image src="./assets/images/hotel-package2-title.png" className="rounded" fluid></Image>
              </Col>
              <Col md="6" className="description">
                <h4>Sweet Stay Package: <span className="price">$35</span></h4>
                <p><strong>Includes:</strong></p>
                <ul>
                  <li><em><strong>Everything from Basic Package</strong></em></li>
                  <li>A basket of assorted candy</li>
                  <li><em>no cheap off-brand candy...</em></li>
                </ul>
                <Button className="choice-btn choice-2" onClick={() => handleChoice(2)}>Choose This Package</Button>
              </Col>
            </Row>
          </ListGroupItem>

          <ListGroupItem className="item odd">
            <Row>
              <Col md="6">
                <Image src="./assets/images/hotel-package3-title.png" className="rounded" fluid></Image>
              </Col>
              <Col md="6" className="description">
                <h4>Charcuterie Package: <span className="price">$70</span></h4>
                <p><strong>Includes:</strong></p>
                <ul>
                  <li><em><strong>Everything from Basic Package</strong></em></li>
                  <li>High-quality meats, cheeses, and other essentials</li>
                  <li>Platter/Board for display</li>
                </ul>
                <Button className="choice-btn choice-3" onClick={() => handleChoice(3)}>Choose This Package</Button>
              </Col>
            </Row>
          </ListGroupItem>

          <ListGroupItem className="item">
            <Row>
              <Col md="6">
                <Image src="./assets/images/hotel-package4-title.png" className="rounded" fluid></Image>
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
                <Button className="choice-btn choice-4" onClick={() => handleChoice(4)}>Choose This Package</Button>
              </Col>
            </Row>
          </ListGroupItem>
        </ListGroup>
      </Col>
    </Container>
  )
}

export default ReservationPage1;