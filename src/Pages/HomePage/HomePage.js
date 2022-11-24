import React from 'react';
import { Wrapper, Title,H2,H4, ButtonDiv } from './HomePageStyled';
import { useEffect, useState } from 'react';
import { BoxContainer, BoxForm, BoxWrapper, MutedLink } from '../RegisterPage/RegisterPageStyled';
//import { BASE_URL } from '../../utils/constants';


const HomePage = () => {
    //const [getError, setGetError] = useState('');
    //const [posts, setPosts] = useState([]);
    //const [getMessage, setGetMessage] = useState('');

            {/*useEffect(() => {
            const token = localStorage.getItem("token");
        
            fetch(`${BASE_URL}/content/skills`, {
            headers: {
                'Content-type': 'application/json',
                Authorization: 'Bearer ' + token
            },
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            if (data.err) {
                setGetError(data.err);
            } else {
                setPosts(posts)
                setGetMessage(data.response)
            }
        }
        )
    }, []);*/}
  return (
    <Wrapper>
        <Title>Home page</Title>
        {/*<BoxWrapper>
            <BoxForm>
                {getError && 
                <H2 className='Error'>Error: {getError}</H2>
                }
                    <div>
                        <div>
                            <H4>{posts.title}</H4> 
                            <p>{posts.body}</p>
                            {getMessage ?
                            <h3>Please choose value</h3> : ''
                            }
                        </div>
                        
                    </div>
            </BoxForm>
        </BoxWrapper>*/}
        <BoxContainer>
            <ButtonDiv type="reset">Get Information</ButtonDiv>
            <MutedLink href="/add">
               Go to Add page
            </MutedLink>
        </BoxContainer>
        
    </Wrapper>
  )
}

export default HomePage;