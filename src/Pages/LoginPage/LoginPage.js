import React from 'react';
import { useState } from 'react';
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
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(username);
        navigate('/');
    }
    const handleUsernameChange= (e) => setUsername(e.target.value);

  return (
    <div>
      <BoxWrapper>
        <H1Text>Welcome Back!</H1Text>
        <SmallText>Please log in to continue!</SmallText>
      </BoxWrapper>

      <BoxContainer>
        <H2>Log in</H2>
        
        <BoxForm onSubmit={handleSubmit}>
          <Input placeholder='Username' onChange={handleUsernameChange}></Input>
          <Input type="email" placeholder='email'></Input>
          <Input type="password" placeholder="password" ></Input>
          <Button type="submit">Log in</Button>
          <MutedLink href="#">
            Don't have an account? Register
          </MutedLink> 
        </BoxForm>
      </BoxContainer>
    </div>
  )
}

export default LoginPage