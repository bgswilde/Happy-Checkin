import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function SignupForm () {


  return(
    <Container>
      <div className="form-card">
        <Form>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="loginEmail" />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" name="password" id="loginPassword" />
          </FormGroup>
          <Button className="submit-btn">Login</Button>
        </Form>
      </div>
      <p>Already have an account?</p>
      <Link to="/login" className="signup-link">Log in here</Link>
    </Container>
  )
}

export default SignupForm;