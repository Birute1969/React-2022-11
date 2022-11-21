import React from 'react';
import { useState,useRef } from 'react';
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
} from "../RegisterPage/RegisterPageStyled";

const LoginPage = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const BASE_URL = 'https://autumn-delicate-wilderness.glitch.me/v1';

    const submitHandler = (e) => {
        e.preventDefault();
        onLogin(username, email, password);

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        {/*if (onLogin) {

        } else {
          fetch ((`${BASE_URL}/auth/login`), 
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
            //....
          } else {
            return res.json().then(data => {
              let errorMessage = 'Authentication failed!';
              console.log(data);
              alert(errorMessage);
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
        <H1Text>Welcome Back!</H1Text>
        <SmallText>Please log in to continue!</SmallText>
      </BoxWrapper>

      <BoxContainer>
        <H2>Log in</H2>
        
        <BoxForm onSubmit={submitHandler}>
          <Input placeholder='Username' onChange={handleUsernameChange}></Input>
          <Input type="email" placeholder='email' required ref={emailInputRef} 
          onChange={handleEmailChange}></Input>
          <Input type="password" placeholder="password" required ref={passwordInputRef} 
          onChange={handlePasswordChange}></Input>
          <Button type="submit">Log in</Button>
          <MutedLink to='/register' href="/register">
            Don't have an account? Register
          </MutedLink> 
        </BoxForm>
      </BoxContainer>
    </div>
  )
}

export default LoginPage