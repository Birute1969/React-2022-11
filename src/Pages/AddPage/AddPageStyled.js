import styled from 'styled-components';

export const Title = styled.h1`
    color: yellowgreen;
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

export const Label = styled.label`
    color: white;
    font-size: 20px;
    font-weight: 500;
    z-index: 10;

`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    background: lightyellow;
    margin: 10px;
    font-size: 16px;
    padding: 0px 10px;
`;