import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
//import { QUERY_ME } from '../../utils/queries';
import Auth from '../../utils/auth';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './index.css';

function LoginForm () {
  const [formState, setFormState] = useState({email: '', password: '' })
  const [login] = useMutation(LOGIN_USER);
  
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
        variables: { email: formState.email, password: formState.password },
      });
      const token = data.data.login.token;
      
      Auth.login(token)
    } catch (e) {
      console.error(e)
    }

    let user = Auth.getProfile();

    setFormState({
      email: '',
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
    <Container className="log-container">
      <div className="form-card">
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="loginEmail" value={formState.email} onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" name="password" id="loginPassword" value={formState.password} onChange={handleChange} />
          </FormGroup>
          <Button color="info" className="submit-btn" type="submit">Login</Button>
        </Form>
      </div>
      <p>Need an account?</p>
      <Link to="/signup" className="signup-link">Create an account here</Link>
    </Container>
  )
}

export default LoginForm;