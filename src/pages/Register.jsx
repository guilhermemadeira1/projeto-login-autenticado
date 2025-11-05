import React from 'react';
import styled from 'styled-components';
import Field from '../components/Field';
import Button from '../components/Button';
import Heading1 from '../components/Heading1';
import Paragraph from '../components/Parapraph';

const LoginRegister = styled.div`
    background-color: #09f;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    
    background-color: #fff;
    padding: 20px;
    height: 80%;
    width: 320px;
    border-radius: 3px;
    box-shadow: 1px 1px 1px 1px #000;
`;

export default function Login() {
    return(
        <LoginRegister>
            <Form action="">
                <div>
                    <Heading1>Registre-se</Heading1>
                    <Paragraph>Crie sua conta gratuita hoje</Paragraph>
                </div>
                <div style={{width: '100%'}}>
                    <Field type="text" label="Nome"/>
                    <Field type="email" label="Email"/>
                    <Field type="password" label="Senha"/>
                </div>
                <Button submit>Registrar</Button>
                <Paragraph>Já possui uma conta? Faça login</Paragraph>
            </Form>
        </LoginRegister>
    );
}

