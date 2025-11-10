import React, {useRef, useState} from 'react';
import styled from 'styled-components';

import Background from '../components/Background';
import Field from '../components/Field';
import Button from '../components/Button';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import NavLink from '../components/NavLink';

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

export default function Register() {
    const inputNameRef = useRef(null);
    const inputEmailRef = useRef(null);
    const inputPasswordRef = useRef(null);
    const showMessage = useRef(false);
    const [regStatus, setRegStatus] = useState({success: false, message: ''});

    const handleRegister = (evt) =>{
        evt.preventDefault(); // impede o comportamento padrão do submmit de atualizar a página
        const name = inputNameRef.current.value;
        const email = inputEmailRef.current.value;
        const password = inputPasswordRef.current.value;

        let users = JSON.parse(localStorage.getItem("users")) || [];
        const userDoesExist = users.some(u => 
            u.name === name && 
            u.email === email && 
            u.password === password
        );
        const emailBeingUsed = users.some(u =>
            u.email === email
        );
        if(!userDoesExist){
            if(!emailBeingUsed){
                if(users.length > 0){
                    users = [...users, {name, email, password}];
                }
                else{
                    users = [{name, email, password}];
                }
                localStorage.setItem("users", JSON.stringify(users));
                setRegStatus({success: true, message: "Usuário cadastrado com sucesso!"})
            }
            else{
                setRegStatus({success: false, message: "Já existe um usuário com este email"});
            }
        }
        else{
            setRegStatus({sucess: false, message: "Usuário já cadastrado"});
        }
        showMessage.current = true;
    }

    return(
        <Background>
            <Form action="">
                <div>
                    <Heading level='1'>Registre-se</Heading>
                    <Paragraph>Crie sua conta gratuita hoje</Paragraph>
                </div>
                <div style={{width: '100%'}}>
                    <Field type="text" label="Nome" inputRef={inputNameRef}/>
                    <Field type="email" label="Email" inputRef={inputEmailRef}/>
                    <Field type="password" label="Senha" inputRef={inputPasswordRef}/>
                </div>
                <Button submit onClick={(e) => handleRegister(e)}>Registrar</Button>
                <Paragraph $color={regStatus.success? '#0a3' : '#f03'} $size="0.9em">
                    {showMessage.current? regStatus.message : ''}
                </Paragraph>
                <Paragraph>Já possui uma conta? 
                   <NavLink to="/login"> Faça login</NavLink> 
                </Paragraph>
            </Form>
        </Background>
    );
}

