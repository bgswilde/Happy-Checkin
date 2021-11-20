import React from 'react';
import './index.css';
import { Container, Image, Button } from 'react-bootstrap';

function Home () {
  return (
    <Container>
        <Image className="main-logo" src="./assets/images/happycheckin-full3.png" fluid></Image>
        <Button className="homeStartBtn">Get Started!</Button>
    </Container>
  )
}

export default Home;