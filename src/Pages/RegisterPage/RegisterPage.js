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
} from "./RegisterPageStyled";

const RegisterPage = ({onRegister}) => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(username);
    navigate('/');
  }
  const handleUsernameChange= (e) => setUsername(e.target.value);

  return (
    <div>
      <BoxWrapper>
        <H1Text>Welcome!</H1Text>
        <SmallText>Please register to continue!</SmallText>
      </BoxWrapper>

      <BoxContainer>
        <H2>Register</H2>
        
        <BoxForm onSubmit={handleSubmit}>
          <Input placeholder='Username' onChange={handleUsernameChange}></Input>
          <Input type="email" placeholder='email'></Input>
          <Input type="password" placeholder="password" ></Input>
          <Input type="password" placeholder="Confirm Password" ></Input>
          <Button type="submit">Register</Button>
          <MutedLink href="#">
            Login with existing account
          </MutedLink> 
        </BoxForm>

      </BoxContainer>
    </div>
  )
}

export default RegisterPage