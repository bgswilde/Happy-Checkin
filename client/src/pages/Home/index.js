import React from 'react';
import './index.css';
import { Container, Image, Button } from 'react-bootstrap';


function Home () {
  return (
    <Container>
        <Image className="main-logo" src="./assets/images/happycheckin-full3.png" fluid></Image>
        <Button className="home-start-btn" href= "./login">Get Started!</Button>
    </Container>
  )
}

export default Home;