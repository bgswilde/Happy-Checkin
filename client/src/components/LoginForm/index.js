import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
//import { QUERY_ME } from '../../utils/queries';
import Auth from '../../utils/auth';
import { Container, Form, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './index.css';

function LoginForm () {
  const [formState, setFormState] = useState({phoneNumber: '', password: '' })
  const [login, {error}] = useMutation(LOGIN_USER);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    
    try {
      const data  = await login({
        variables: { phoneNumber: formState.phoneNumber, password: formState.password },
      });
      const token = data.data.login.token;
      
      Auth.login(token)
    } catch (e) {
      console.error(e)
    }

    let user = Auth.getProfile();

    setFormState({
      phoneNumber: '',
      password: ''
    })
    if (user.data.role === 0){
    window.location.assign(`${user.data._id}/customer`)
    }
    else if (user.data.role === 1 || user.data.role === 2) {
      window.location.assign(`${user.data._id}/checker`)
    }
  }

  return(
    <Container>
      <Row className="justify-content-center">
        <Col sm="8" xl="6">
          <h1 className="title">Log In</h1>
        </Col>
      </Row>
      <Col md="8" className="form-card log-container">
        <p className="subtitle">welcome back, my friend</p>
        <Form className="user-details" onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="mb-0" htmlFor="phoneNumber">Phone Number</Form.Label>
            <Form.Control type="text" name="phoneNumber" id="phoneNumber" placeholder="ex. 9876543210" onBlur={handleChange} />
          </Form.Group >
          <Form.Group className="mb-3">
            <Form.Label className="mb-0" htmlFor="password">Password</Form.Label>
            <Form.Control type="password" name="password" id="loginPassword" placeholder="password" onBlur={handleChange} />
          </Form.Group>
          <Button className="submit-btn" color="info" type="submit">Log In</Button>
        </Form>
        {error && <div className="error-msg">that didn't work</div>}
        <p className="bottom-msg">need an account?</p>
        <div className="signup-link">
          <Link className="bottom-link" to="/signup">Sign up here</Link>
        </div>
      </Col>      
    </Container>
  )
}

export default LoginForm;