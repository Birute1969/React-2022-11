import React from 'react';

import { useNavigate } from 'react-router-dom';
import { 
    NavContainer,
    NavWrap,
    Div,
    Nav,
    NavLink,
    ButtonContainer, 
    Button 
} from './NavigationStyled';

export const Navigation = ({ onLogout }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        onLogout();
        navigate('/register');
    }
    
    return (
            <NavContainer>
                <NavWrap>
                    <NavLink to='/'>
                        <Div>
                        <img src={require('../../assets/logo.svg')}
                        alt="logo"/>
                        </Div>
                    </NavLink>
                    
                    <Nav>
                        <NavLink to="/" activeStyle>Home Page</NavLink>
                        <NavLink to ="/pages" activeStye>Add Page</NavLink>
                    </Nav>
                    
                    <ButtonContainer>
                        <Button onClick={handleLogout}>
                            <span>Logout</span>
                        </Button>
                    </ButtonContainer>
                    
                    <NavLink to="/register" activeStye>Register Page</NavLink>
                    <NavLink to="/login" activeStye>Login Page</NavLink>
                    
                </NavWrap>
            </NavContainer>
        )
}