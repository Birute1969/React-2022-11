import React from 'react';
import { useState, useRef } from 'react';
import { Navigate } from 'react-router';
//import { useNavigate } from 'react-router';
import { Navigation } from '../../Components/Navigation/Navigation';
import { BASE_URL } from '../../Utils/Constant';

import {
  BoxWrapper,
  H3,
  H1Text,
  SmallText,
  BoxContainer,
  H2,
  BoxForm,
  Input,
  Button,
  MutedLink,
} from "./RegisterPageStyled";

const RegisterPage = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registerError, setRegisterError] = useState('');
  const [registrationSuccessful, setRegistrationMessage] = useState('');

  //const navigate = useNavigate();
  

  const submitHandler = (event) => {
    event.preventDefault()
    onRegister( email, password);
    
      //Pastaba: nesuveikė:
    {/*fetch(`${BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        //username: username,
        email: email, 
        password: password,
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.err) {
        setRegisterError(data.err);
      } else {
        setRegistrationMessage(data.lastID)
        }
      })*/}
      
    }
    

  const handleUsernameChange= (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  return (
    <div>
      <Navigation></Navigation>
      {registerError && <H3>Error: {registerError} !</H3>}
      <BoxWrapper>
        <H1Text>Welcome!</H1Text>
        <SmallText>Please register to continue!</SmallText>
      </BoxWrapper>

      <BoxContainer>
        <H2>Register</H2>
        
        <BoxForm onSubmit={submitHandler}>
          <Input placeholder='Username' onChange={handleUsernameChange}></Input>
          <Input type="email" placeholder='email' required 
          onChange={handleEmailChange}></Input>
          <Input type="password" placeholder="password" required
          onChange={handlePasswordChange}></Input>
          <Input type="password" placeholder="Confirm Password" required 
          onChange={handlePasswordChange}></Input>
          <Button type="submit">Register</Button>
            <MutedLink href="/login">
            Login with existing account
          </MutedLink>
        </BoxForm>
      </BoxContainer>
    </div>
  )
}

export default RegisterPage