import React from 'react';
import styled from 'styled-components';

const Rect = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

const Form = styled.form`
  max-width: 250px;
  overflow: auto;
`;

const Input = styled.input`
  box-sizing: border-box;
  border: 1px solid #DCDEDE;
  border-radius: 3px;
  display: block;
  font-size: 14px;
  margin-bottom: 1em;
  padding: .75em;
  outline: none;
  width: 100%;

  ::placeholder {
    color: #363D45;
    font-weight: 300;
  }

  :focus {
    border: 1px solid #ABCDFD;
  }
`;

const SubmitButton = styled.input`
  border: none;
  background-color: #222232;
  border-radius: 3px;
  color: #ffffff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  padding: .75em;
  text-align: center;
  width: 100%;
`;

export default function Login() {
  return (
    <Rect>
      <Form>
        <Input placeholder="Username" type="text" />
        <Input placeholder="Password" type="password" />
        <SubmitButton type="submit" value="Login" />
      </Form>
    </Rect>
  );
}