import React, { useState } from 'react';
//import { useMutation } from '@apollo/client';
//import { ADD_USER } from '../../utils/mutations';
//import Auth from '../../utils/auth'
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './index.css';


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

  /*const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
    const mutationRe = await addUser({
      variables: {
        email: formState.email,
        phoneNumber: formState.phoneNumber,
        password: formState.password
      }
    });
    const token = mutationRe.data.addUser.token;
    Auth.login(token);
    } catch (error) {
      console.error(error)
    }
  }*/

  return(
    <Container className="log-container">
      <div className="form-card">
        <Form /*onSubmit={handleFormSubmit}*/>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="loginEmail" placeholder="Enter a valid Email address" onChange={handleChange} />
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
      </div>
      <p></p>
      <Link to="/login" className="signup-link">Back to login</Link>
    </Container>
  )
}

export default SignupForm;