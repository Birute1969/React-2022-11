import React from 'react';
import { Input, Button, BoxContainer } from '../RegisterPage/RegisterPageStyled';
import { 
  Wrapper, 
  Title,
  Label,
} from './AddPageStyled';

const AddPage = () => {
  return (
    <div>
      <Wrapper>
        <Title>
            Add Page
        </Title>
        <BoxContainer>
          <Label>Input text</Label> <br></br>
          <Input type="text" placeholder='Title'></Input>
          <Input type="text" placeholder='Description' ></Input>
          <Button type="submit">Add</Button>
        </BoxContainer>
      </Wrapper>
    </div>
    
  )
}
export default AddPage;