import React, { useState } from 'react';
//import { useMutation } from '@apollo/client';
//import { ADD_USER } from '../../utils/mutations';
//import Auth from '../../utils/auth'
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './index.css';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';


function SignupForm () {
  const [formState, setFormState] = useState({email: '', phoneNumber: '', password: '' })
  //const [addUser, { error }] = useMutation(ADD_USER);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const [addUser, { error }] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState }
      });
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  }

  return(
    <Container className="log-container">
      <div className="form-card">
        <Form onSubmit={handleFormSubmit}>
          <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input type="firstName" name="firstName" id="firstName" placeholder="Enter your first name" onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="lastName">Last Name</Label>
            <Input type="lastName" name="lastName" id="lastName" placeholder="Enter your last name" onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="phoneNumber">Phone Number</Label>
            <Input type="phoneNumber" name="phoneNumber" id="phoneNumber" placeholder="Phone number(area code first)" onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" name="password" id="loginPassword" placeholder="At least 5 characters long" onChange={handleChange} />
          </FormGroup>
          <Button className="submit-btn" color="info" type="submit">Register</Button>
        </Form>
        {error && <div>Sign up failed</div>}
      </div>
      <p></p>
      <Link to="/login" className="signup-link">Back to login</Link>
    </Container>
  )
}

export default SignupForm;