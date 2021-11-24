import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth'
import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './index.css';

function SignupForm () {
  const [formState, setFormState] = useState({firstName: '', lastName: '', phoneNumber: '', password: '' })
  const [addUser, {error}] = useMutation(ADD_USER);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const mutationRe = await addUser({
        variables: {
          firstName: formState.firstName,
          lastName: formState.lastName,
          phoneNumber: formState.phoneNumber,
          password: formState.password
        }
      });

      const token = mutationRe.data.addUser.token;
      
      Auth.login(token);
    } catch (error) {
      console.error(error)
    }

    let user = Auth.getProfile();
    if (user.data.role === 0) {
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
          <h1 className="title">Sign Up</h1>
        </Col>
      </Row>
      <Col md="8" className="form-card log-container">
        <p className="subtitle">You'll soon kiss checkin frustration goodbye...</p>
        <Form className="user-details" onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="mb-0" htmlFor="firstName">First Name</Form.Label>
            <Form.Control type="text" name="firstName" id="firstName" placeholder="Enter your first name" onBlur={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="mb-0" htmlFor="lastName">Last Name</Form.Label>
            <Form.Control type="text" name="lastName" id="lastName" placeholder="Enter your last name" onBlur={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="mb-0" htmlFor="phoneNumber">Phone Number</Form.Label>
            <Form.Control type="text" name="phoneNumber" id="phoneNumber" placeholder="ex. 9876543210" onBlur={handleChange} />
          </Form.Group >
          <Form.Group className="mb-3">
            <Form.Label className="mb-0" htmlFor="password">Password</Form.Label>
            <Form.Control type="password" name="password" id="loginPassword" placeholder="At least 5 characters long" onBlur={handleChange} />
          </Form.Group>
          <Button className="submit-btn" color="info" type="submit">Register</Button>
        </Form>
        {error && <div className="error-msg">sign up failed</div>}
        <p className="bottom-msg">already have an account?</p>
        <div className="signup-link">
          <Link className="bottom-link" to="/login">Back to login</Link>
        </div>
      </Col>
      
      
    </Container>
  )
}

export default SignupForm;