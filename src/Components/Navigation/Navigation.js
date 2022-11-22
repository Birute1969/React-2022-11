import React from 'react';

import { 
    useNavigate, 
    Link, 
    useLocation 
} from 'react-router-dom';

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
    const location = useLocation();

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
    //Pastaba: tokiu būdu matosi tik login ir register, vėliau Hime Page neužkrauna, kodėl?
    {/*return (
            <NavContainer>
                <NavWrap>
                    <NavLink to='/'>
                        <Div>
                        <img src={require('../../assets/logo.svg')}
                        alt="logo"/>
                        </Div>
                    </NavLink>
                    
                    <Nav>
                    {location.pathname === '/home' && <NavLink to="/" activeStyle>Home Page</NavLink>}
                    {location.pathname === '/home' && <NavLink to ="/pages" activeStye>Add Page</NavLink>}
                    {location.pathname === '/add' && <NavLink to="/" activeStyle>Home Page</NavLink>}
                    {location.pathname === '/add' && <NavLink to ="/pages" activeStye>Add Page</NavLink>}
                    </Nav>
                    
                    <ButtonContainer>
                        <Button onClick={handleLogout}>
                            <span>Logout</span>
                        </Button>
                    </ButtonContainer>
                    
                    {location.pathname === '/register' && <NavLink to="/register" activeStye>Register Page</NavLink>}
                    {location.pathname === '/register' && <NavLink to="/login" activeStye>Login Page</NavLink>}
                    {location.pathname === '/login' && <NavLink to="/register" activeStye>Register Page</NavLink>}
                    {location.pathname === '/login' && <NavLink to="/login" activeStye>Login Page</NavLink>}
                    
                </NavWrap>
            </NavContainer>
    )*/}
}