import React from 'react';
import { Wrapper, Title, ButtonDiv } from './HomePageStyled';
import { useEffect, useState } from 'react';
//import { BASE_URL } from '../../utils/constants';


const HomePage = () => {
  const [getError, setGetError] = useState('');
    const [posts, setPosts] = useState([]);

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
                setPosts(data);
            if (data.err) {
                setGetError(data.err);
            } else {
                
            }
        }
        )
    }, []);*/}
  return (
    <Wrapper>
        <Title>Skills</Title>
        <div>
        {getError && <h2 className='Error'>Error: {getError}</h2>}
                <div className='posts-wrapper'>
                    {posts.map(data => 
                    <div>
                        <div className='post' key={Math.random}>
                            <h2>Skill: {data.title}</h2> 
                            <p>Skill description: {data.description}</p>
                        </div>
                    </div>
                    )}
                </div>
        </div>

        <ButtonDiv type="reset">Get Information</ButtonDiv>
    </Wrapper>
  )
}

export default HomePage;