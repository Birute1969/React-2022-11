import React from 'react';
import { useState } from 'react';
import { BASE_URL } from '../../Utils/Constant';
import { Input, Button, BoxContainer, H3 } from '../RegisterPage/RegisterPageStyled';
import { 
  Wrapper, 
  Title,
  Form,
  Label,
} from './AddPageStyled';

const AddPage = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [addError, setAddError] = useState('');
  const [addSuccess, setAddSuccess] = useState('');
  const token = localStorage.getItem("token");

  const handleAdd = (e) => {
    e.preventDefault();
    fetch(`${BASE_URL}/content/skills`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + token
      },
      body: JSON.stringify({
        title: title,
        description: description
      }
      )
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if (data.err) {
        setAddError(data.err);
      } else {
        setAddSuccess(data.msg);
      }
    })
  }
  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  return (
    <div>
      <>
      {addError && <H3>Error: {addError}</H3>}
      {addSuccess && <H3>Success: {addSuccess}!</H3>}
      </>
      <Wrapper>
        <Title>
            Add Skills
        </Title>
        <BoxContainer>
          <Form onSubmit={handleAdd}>
            <Label>Input text</Label> <br></br>
            <Input type="text" placeholder='Title' onChange={handleTitleChange}></Input>
            <Input type="text" placeholder='Description' onChange={handleDescriptionChange}></Input>
            <Button type="submit">Add</Button>
          </Form>
        </BoxContainer>
      </Wrapper>
    </div>
    
  )
}
export default AddPage;