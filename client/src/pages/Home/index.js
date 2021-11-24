import React from 'react';
import './index.css';
import { Container, Image, Button, Row, Col } from 'react-bootstrap';


function Home () {
  return (
    <Container>
      <Row>
        <Col className="min-height">
          <Image className="main-logo" src="./assets/images/happycheckin-full3.png" fluid></Image>
          <Button className="home-start-btn" href= "./login">Get Started!</Button>
          <h2>Here's How It Works</h2>
          </Col>
      </Row>
      <Row className="step-1 min-height">
        <Col className="">
          <Image className="main-logo" src="./assets/images/happycheckin-full3.png" fluid></Image>
          <Button className="home-start-btn" href= "./login">Get Started!</Button>
          </Col>
      </Row>
    </Container>
  )
}

export default Home;