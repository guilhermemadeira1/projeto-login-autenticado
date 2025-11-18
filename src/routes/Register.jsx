import {useRef, useState} from 'react';

import Background from '../components/Background';
import Form from '../components/Form';
import Field from '../components/Field';
import Button from '../components/Button';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import NavLink from '../components/NavLink';

export default function Register() {
    const inputNameRef = useRef();
    const inputEmailRef = useRef();
    const inputPasswordRef = useRef();
    const inputDescriptionRef = useRef();
    const inputImageRef = useRef();
    const showMessage = useRef(false);
    const [regStatus, setRegStatus] = useState({success: false, message: ''});

    const handleRegister = (evt) =>{
        evt.preventDefault(); // impede o comportamento padrão do submmit de atualizar a página
        const name = inputNameRef.current.value;
        const email = inputEmailRef.current.value;
        const password = inputPasswordRef.current.value;
        const description = inputDescriptionRef.current.value;
        const image = inputImageRef.current.value;
        let users = JSON.parse(localStorage.getItem("registeredUsers")) || [];

        if(name && email && password){ 
            const userDoesExist = users.some(u => 
                u.name === name && 
                u.email === email && 
                u.password === password
            );
            const emailBeingUsed = users.some(u =>
                u.email === email
            );
            if(!emailBeingUsed){
                if(!userDoesExist){
                    const nextId =  users.length > 0? Math.max(...users.map(u => u.id)) + 1 : 0; // mapeia os ids e faz um spread para separar o array em valores individuais para o Math.max comparar
                    users = [...users, {id: nextId, name, email, password, description, image}];
                    localStorage.setItem("registeredUsers", JSON.stringify(users));
                    setRegStatus({success: true, message: "Usuário cadastrado com sucesso!"});
                   
                }
                else{
                    setRegStatus({success: false, message: "Este usuário já está cadastrado"});
                }
            }
            else{
                setRegStatus({success: false, message: "Este email já está sendo usado"});
            }
        }        
        else{
            setRegStatus({success: false, message: "Dados estão faltando"})
        }
        showMessage.current = true;
    }

    return(
        <Background>
            <Form action="" $width="60%" $maxWidth="300px" $height="80%">
                <div>
                    <Heading level='1'>Registre-se</Heading>
                    <Paragraph>Crie sua conta gratuita hoje</Paragraph>
                </div>
                <div style={{width: '100%'}}>
                    <div style={{display: 'flex', gap: '10px'}}>
                        <Field type="text" label="Nome" inputRef={inputNameRef} required/>
                        <Field type="email" label="Email" inputRef={inputEmailRef} required/>
                    </div>
                    <div style={{display: 'flex', gap: '10px'}}>
                        <Field type="password" label="Senha" inputRef={inputPasswordRef} required/>
                        <Field type="text" label="Imagem de perfil" inputRef={inputImageRef}/>
                    </div>
                    <Field type="textarea" label="Sobre mim" inputRef={inputDescriptionRef}/>
                </div>
                <Button submit onClick={(e) => handleRegister(e)}>Registrar</Button>
                <Paragraph $color={regStatus.success? '#0a3' : '#f03'} $size="1em">
                    {showMessage.current? regStatus.message : ''}
                </Paragraph>
                <Paragraph>Já possui uma conta? 
                   <NavLink to="/login"> Faça login</NavLink> 
                </Paragraph>
            </Form>
        </Background>
    );
}

