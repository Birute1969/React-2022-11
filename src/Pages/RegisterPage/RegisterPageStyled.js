import styled from 'styled-components';

export const BoxWrapper = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    z-index: 20;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    
`;
export const H3 = styled.h3`
    color: red;
    background-color: lightgreen ;
    text-align: center;
    margin: 20 px;
`;

export const H1Text = styled.h1`
    width: 100%;
    color: white;
    background: rgb(63,94,251);
    background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(19,238,177,0.5494572829131652) 100%);
`;

export const BoxContainer = styled.section`
    margin: 3rem auto;
    width: 95%;
    max-width: 25rem;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(11,221,46,1) 35%, rgba(0,212,255,1) 100%);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    padding: 1rem;
    text-align: center;
`;
export const H2 = styled.h2`
    text-align: center;
    color: white;
    margin-bottom:40px;
`;

export const SmallText = styled.h3`
    color: grey;
    font-size: 30px;
    font-weight: 500;
    z-index: 10;

`;

export const BoxForm = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

export const Input = styled.input`
    font: inherit;
    height: 40px ;
    background-color: lightgrey;
    color: #38015c;
    border-radius: 16px;
    border: 1px solid white;
    width: 100%;
    text-align: left;
    padding: 0.25 rem;
    margin-bottom: 30px;
`;
export const Button = styled.button`
    cursor: pointer;
    color: black;
    width: 90%;
    height: 36px;
    box-sizing: border-box;
    text-align: center;
    border-radius: 20px;
    line-height: 15px;
    font: inherit;
    font-size: 20px;
    font-weight: 700;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(11,221,46,1) 35%, rgba(0,212,255,1) 100%);
    text-decoration: none;
    box-shadow: 0 15px 15px rgb(0 42 177 / 15%);
    margin: 20px;
`;

export const MutedLink = styled.a`
    font-size: 22px;
    color: whitesmoke;
    font-weight: 500;
    text-decoration: none;
`;