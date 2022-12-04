import React from 'react';
import { Wrapper, Title,H2,DivWrapper, H4 } from './HomePageStyled';
import { useEffect, useState } from 'react';
import { BoxForm, BoxWrapper } from '../RegisterPage/RegisterPageStyled';
import { BASE_URL } from '../../Utils/Constant';

const HomePage = () => {
    const [getError, setGetError] = useState('');
    const [screen, setScreen] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');

        fetch(`${BASE_URL}/content/skills`, {
            headers: {
                'Content-type': 'application/json',
                Authorization: 'Bearer ' + token
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.err) {
                    setGetError(data.err);
                } else {
                    setScreen(data)
                }
            })
    }, []);

    return (
        <Wrapper>
            <Title>Skills</Title>
            <BoxWrapper>
                <BoxForm>
                <>
                {getError && <H2>Error: {getError}</H2>}
                </>
                    {screen
                        .filter((screen) => screen.title)
                        .map((screen) => (
                            <DivWrapper key={screen.id}>
                                <H4>{screen.title}</H4>
                                <p>{screen.description}</p>
                            </DivWrapper>
                        ))}
                </BoxForm>
            </BoxWrapper>
        </Wrapper>
    )
};

export default HomePage;