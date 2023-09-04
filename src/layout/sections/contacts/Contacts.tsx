import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Contacts</SectionTitle>
                <StyledForm>
                    <StyledInput placeholder={'Name'}/>
                    <StyledInput placeholder={'Theme'}/>
                    <StyledInput placeholder={'Message'} as={'textarea'}/>
                    <Button type={'submit'}>Send message</Button>
                </StyledForm>
            </Container>
        </StyledContacts>
    );
};
const StyledForm = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;
  textarea{
    resize: none;
    height: 155px;
  }
`
const StyledInput = styled.input`
  width: 100%;
  border: 1px solid ${theme.colors.borderColor};
  background-color: ${theme.colors.secondaryBg};
  padding: 7px 15px;
  font-family: 'Poppins', sans-serif;
  color: ${theme.colors.font};
  font-weight: 400;
  letter-spacing: 0.6px;
  
  &::placeholder{
    color:${theme.colors.placeholdeColor};
    text-transform:capitalize;
  }
  
  &:focus-visible{
    outline: 1px solid ${theme.colors.borderColor};
  }
`
const StyledContacts = styled.section`

`
