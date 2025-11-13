import {useRef, useState} from 'react';
import styled from 'styled-components';
import useAuth from '../hooks/useAuth';

import Background from '../components/Background';
import NavLink from '../components/NavLink';
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
    const inputEmailRef = useRef(null);
    const inputPasswordRef = useRef(null);
    const showMessage = useRef(false);
    const [loginStatus, setLoginStatus] = useState({success: false, message: ''});
    const {login} = useAuth();

    const handleLogin = (evt) =>{
        evt.preventDefault(); // impede o comportamento padrão do submit de atualizar a página
        const email = inputEmailRef.current.value;
        const password = inputPasswordRef.current.value;
        const users = JSON.parse(localStorage.getItem("registeredUsers")) || [];
       
        if(users.length > 0){
            if(email && password){
                const foundUser = users.find(u => 
                    email === u.email && 
                    password === u.password
                );
                if(foundUser){
                    setLoginStatus({success: true, message:'Usuário autenticado com sucesso!'});
                    login(foundUser);
                }
                else{
                    setLoginStatus({success: false, message: 'Senha ou e-mail incorretos'});
                }   
            }
            else{
                setLoginStatus({success: false, message: 'Alguns dados estão faltando'});
            }
        }
        else{
            setLoginStatus({success: false, message: 'Nenhum usuário foi cadastrado'})
        }
        showMessage.current = true;
        console.log(loginStatus);
    };

    return(
        <Background>
            <Form action="">
                <div>
                    <Heading level='1'>Login</Heading>
                    <Paragraph>Faça login para acessar o perfil</Paragraph>
                </div>
                <div style={{width: '100%'}}>
                    <Field type="email" label="Email" inputRef={inputEmailRef}/>
                    <Field type="password" label="Senha" inputRef={inputPasswordRef}/>
                </div>
                <Button submit onClick={(e) => handleLogin(e)}>Entrar</Button>
                <Paragraph $color={loginStatus.success? '#083': '#f03'} $size="1em">
                    {showMessage.current? loginStatus.message : ''}
                </Paragraph>
                <Paragraph>
                    Não tem uma conta?
                    <NavLink to="/registro"> Registre-se</NavLink>
                </Paragraph>
            </Form>
        </Background>
    );
}