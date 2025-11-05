import React from 'react';
import styled from 'styled-components';

import Conteiner from '../components/Container';
import Field from '../components/Field';
import Button from '../components/Button';
import Heading1 from '../components/Heading1';
import Paragraph from '../components/Parapraph';

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
        <Conteiner>
            <Form action="">
                <div>
                    <Heading1>Login</Heading1>
                    <Paragraph>Faça login para acessar o perfil</Paragraph>
                </div>
                <div style={{width: '100%'}}>
                    <Field type="text" label="Nome"/>
                    <Field type="email" label="Email"/>
                    <Field type="password" label="Senha"/>
                </div>
                <Button submit>Entrar</Button>
                <Paragraph>Não tem uma conta? Registre-se</Paragraph>
            </Form>
        </Conteiner>
    );
}