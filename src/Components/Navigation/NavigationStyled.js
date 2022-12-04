import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavContainer = styled.div`
    width: 100%;
    height: 90px;
    z-index: 20;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(11,221,46,1) 35%, rgba(0,212,255,1) 100%);
`;
export const NavWrap = styled.div`
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    z-index: 20;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-space-between;
`;
export const Div = styled.div`
    display: flex;
    flex-direction: center;
    width: 228px;
    height: 72px;
    background-size: 100% 100%;
    cursor: pointer;
`;


export const Nav = styled.nav`
    flex: 1;
    display: flex;
    justify-content: space-space-evenly;
    position : relative;
    padding-left: 30px;
    z-index: 10;
`;

export const NavLink = styled(Link)`
    color: #000;
    display: flex;
    padding: 0 15px;
    font-size: 25px;
    line-height: 80px;
    font-weight: 700;
    text-decoration: none;
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const Button = styled.button`
    width: 100px;
    height: 36px;
    color: black;
    box-sizing: border-box;
    text-align: center;
    border-radius: 20px;
    line-height: 10px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(11,221,46,1) 35%, rgba(0,212,255,1) 100%);
    text-decoration: none;
    box-shadow: 0 15px 15px rgb(0 42 177 / 12%);
`;