import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

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
      <h1>Register Page</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder='Username' onChange={handleUsernameChange}></input>
        <input type="password" placeholder="Password" ></input>
        <button>Register</button>
      </form>
    </div>
  )
}

export default RegisterPage