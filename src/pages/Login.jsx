import React from 'react';
import styled from 'styled-components';

import Background from '../components/Background';
import Field from '../components/Field';
import Button from '../components/Button';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    
    align-items: center;
    background-color: #fff;
    padding: 20px;
    height: 80%;
    width: 320px;
    border-radius: 3px;
    box-shadow: 1px 1px 1px 1px #000;
`;

export default function Login() {
    return(
        <Background>
            <Form action="">
                <div>
                    <Heading level='1'>Login</Heading>
                    <Paragraph>Faça login para acessar o perfil</Paragraph>
                </div>
                <div style={{width: '100%'}}>
                    <Field type="email" label="Email"/>
                    <Field type="password" label="Senha"/>
                </div>
                <Button submit>Entrar</Button>
                <Paragraph>Não tem uma conta? Registre-se</Paragraph>
            </Form>
        </Background>
    );
}