import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth'
import { Container, Col, Row, Form, Button, FormGroup } from 'react-bootstrap';
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
    <Container className="log-container">
      <Col className="form-card">
        <Form onSubmit={handleFormSubmit}>
          <FormGroup>
            <label for="firstName">First Name</label>
            <input type="firstName" name="firstName" id="firstName" placeholder="Enter your first name" onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <label for="lastName">Last Name</label>
            <input type="lastName" name="lastName" id="lastName" placeholder="Enter your last name" onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <label for="phoneNumber">Phone Number (areacode first)</label>
            <input type="phoneNumber" name="phoneNumber" id="phoneNumber" placeholder="Phone number(area code first)" onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <label for="password">Password</label>
            <input type="password" name="password" id="loginPassword" placeholder="At least 5 characters long" onChange={handleChange} />
          </FormGroup>
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