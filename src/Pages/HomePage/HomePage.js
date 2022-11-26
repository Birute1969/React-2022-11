import React from 'react';
import { Wrapper, Title,H2,H4 } from './HomePageStyled';
import { useEffect, useState } from 'react';
import { BoxForm, BoxWrapper } from '../RegisterPage/RegisterPageStyled';
import { BASE_URL } from '../../Utils/Constant';


const HomePage = () => {
    const [getError, setGetError] = useState('');
    const [posts, setPosts] = useState([]);

            //Neužkrauna Skilsų:
            useEffect(() => {
            const token = localStorage.getItem("token");
            console.log(token);
        
            fetch(`${BASE_URL}/content/skills`, {
                //method: 'GET',
                headers: {
                'Content-type': 'application/json',
                Authorization: 'Bearer ' + token
            },
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPosts(data);
            if (data.err) {
                setGetError(data.err);
            } else {
                
            }
        }
        )
    }, []);

  return (
    <Wrapper>
        <Title>Skills</Title>
        <BoxWrapper>
            <BoxForm>
                <>
                {getError && <H2>Error: {getError}</H2>}
                </>
                <div>
                    {posts.map (data => 
                        <div key={Math.random}>
                            <H4>Skill: {data.title}</H4> 
                            <p>Skill description: {data.description}</p>
                        </div>
                    )}
                </div>
            </BoxForm>
        </BoxWrapper>
    </Wrapper>    
  )
}

export default HomePage;