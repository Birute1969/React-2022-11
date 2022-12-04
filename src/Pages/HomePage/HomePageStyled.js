import styled from 'styled-components';

export const Title = styled.h1`
    color: white;
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    z-index: 20;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    background: rgb(63,94,251);
    background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(19,238,177,0.5494572829131652) 100%);
`;

export const ButtonDiv = styled.button`
    width: 300px;
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
    margin-left: 60px;
`;

export const DivWrapper = styled.div`
border: 8px solid black;
border-radius: 10px;
display: inline-flex;
margin-top: 30px;
margin-right: 30px;
padding: 20px;
`;

export const H2 = styled.h2`
    color: red;
    background-color: grey;
`;

export const H4 = styled.h4`
    color: darkgreen;
    background-color: lightgreen ;
    text-align: center;
    margin: 20 px;
`;