import React from 'react';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router';

import {
  BoxWrapper,
  H1Text,
  SmallText,
  BoxContainer,
  H2,
  BoxForm,
  Input,
  Button,
  MutedLink,
} from "./RegisterPageStyled";

const RegisterPage = ({onRegister}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  //ASE_URL = 'https://autumn-delicate-wilderness.glitch.me/v1';

  const submitHandler = (event) => {
    event.preventDefault()
  onRegister(username, email, password);
      
  const enteredEmail = emailInputRef.current.value;
  const enteredPassword = passwordInputRef.current.value;

    //Validation:
    {/*if (onRegister) {

    } else {
      fetch ((`${BASE_URL}/auth/register`),
      {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(res => {
      if (res.ok) {

      } else {
        return res.json()
        .then(data => {
          let errorMessage = 'User name, e-mail or password incorrect!';
          console.log(data);
          alert(error.Message);
          });
        }
      });
    }*/}
    navigate('/');
  };

  const handleUsernameChange= (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  return (
    <div>
      <BoxWrapper>
        <H1Text>Welcome!</H1Text>
        <SmallText>Please register to continue!</SmallText>
      </BoxWrapper>

      <BoxContainer>
        <H2>Register</H2>
        
        <BoxForm onSubmit={submitHandler}>
          <Input placeholder='Username' onChange={handleUsernameChange}></Input>
          <Input type="email" placeholder='email' required ref={emailInputRef} 
          onChange={handleEmailChange}></Input>
          <Input type="password" placeholder="password" required ref={passwordInputRef} 
          onChange={handlePasswordChange}></Input>
          <Input type="password" placeholder="Confirm Password" required ref={passwordInputRef} 
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