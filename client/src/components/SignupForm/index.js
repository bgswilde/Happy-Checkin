import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth'
<<<<<<< HEAD
import { Container, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './index.css';

function SignupForm () {
  const [formState, setFormState] = useState({firstName: '', lastName: '', phoneNumber: '', password: '' })
  const [addUser, {error}] = useMutation(ADD_USER);
=======
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './index.css';


function SignupForm () {
  const [formState, setFormState] = useState({email: '', phoneNumber: '', password: '' })
  const [addUser, { error }] = useMutation(ADD_USER);
>>>>>>> feature/style-consistency

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
      <Col md="8" className="form-card log-container">
        <Form className="user-details" onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="mb-0" for="firstName">First Name</Form.Label>
            <Form.Control type="text" name="firstName" id="firstName" placeholder="Enter your first name" onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="mb-0" for="lastName">Last Name</Form.Label>
            <Form.Control type="text" name="lastName" id="lastName" placeholder="Enter your last name" onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="mb-0" for="phoneNumber">Phone Number</Form.Label>
            <Form.Control type="text" name="phoneNumber" id="phoneNumber" placeholder="ex. 9876543210" onChange={handleChange} />
          </Form.Group >
          <Form.Group className="mb-3">
            <Form.Label className="mb-0" for="password">Password</Form.Label>
            <Form.Control type="password" name="password" id="loginPassword" placeholder="At least 5 characters long" onChange={handleChange} />
          </Form.Group>
          <Button className="submit-btn" color="info" type="submit">Register</Button>
        </Form>
        {error && <div>Sign up failed</div>}
      </Col>
      <p></p>
      <Link to="/login" className="signup-link">Back to login</Link>
    </Container>
  )
}

export default SignupForm;