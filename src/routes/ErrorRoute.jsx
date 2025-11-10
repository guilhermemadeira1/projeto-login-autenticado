import React from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import Background from '../components/Background';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';

const ErrorDiv = styled.div`
    width: 50%;
    max-width: 300px;
`;

export default function ErrorRoute(){
  const navigate = useNavigate();
  const goBack = () =>{
    navigate(-1); // -1 informa para voltar uma página (das rotas do react-router) no histórico
  } 
  return (
    <Background direction="column">
        <ErrorDiv>
            <Paragraph $color="#fff" $weight="bold" $size="2em">Página não encontrada</Paragraph>
            <Button onClick={goBack}>voltar</Button>
        </ErrorDiv>
    </Background>
  )
};
