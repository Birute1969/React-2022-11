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
                    <NavLink to ="/pages" activeStyle>Add Page</NavLink>
                </Nav>
                
                <ButtonContainer>
                    <Button onClick={handleLogout}>
                        <span>Logout</span>
                    </Button>
                </ButtonContainer>
                
                <NavLink to="/register" activeStyle>Register Page</NavLink>
                <NavLink to="/login" activeStyle>Login Page</NavLink>
                
            </NavWrap>
        </NavContainer>
    )
    //Pastaba: žemiau tokiu būdu matosi tik login ir Register navigation juostoje, vėliau prisijungus nesimato Home Page ir Add page pavadinimų Navigation juostoje ir Add Page neužsikrauna, kodėl?
    {/*return (
            <NavContainer>
                <NavWrap>
                    <NavLink to='/'>
                        <Div>
                        <img src={require('../../assets/logo.svg')}
                        alt="logo"/>
                        </Div>
                    </NavLink>
                    
                        <NavLink>
                            {location.pathname === '/login' && <NavLink to="/login">Login Page</NavLink>}
                            {location.pathname === '/login' && <NavLink to="/register">Register Page</NavLink>}
                            
                            {location.pathname === '/register' && <NavLink to="/login">Login Page</NavLink>}
                            {location.pathname === '/register' && <NavLink to="/register">Register Page</NavLink>}
                            
                            
                        </NavLink>                 
                        
                        <NavLink>
                            
                            {location.pathname === '/home' && <NavLink to="/home" activeStyle>Home Page</NavLink>}
                            {location.pathname === '/home' && <NavLink to ="/add" activeStye>Add Page</NavLink>}
                            
                            {location.pathname === '/add' && <NavLink to="/home" activeStyle>Home Page</NavLink>}
                            {location.pathname === '/add' && <NavLink to ="/add" activeStye>Add Page</NavLink>}
                            
                            <ButtonContainer>
                            <Button onClick={handleLogout}>
                                <span>Logout</span>
                            </Button>
                            </ButtonContainer>
                        </NavLink>
                </NavWrap>
            </NavContainer>
    )*/}

}