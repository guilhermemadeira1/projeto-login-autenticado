import React, {useState, useRef, useReducer} from "react";
import Background from "../components/Background";
import Heading from "../components/Heading";
import Form from "../components/Form";
import Field from "../components/Field";
import Button from "../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import DefaultImage from "../assets/default-profile-image.png";

const FieldSet1 = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
`;
const FieldSet2 = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    align-self: flex-start;
`;
const ButtonSet = styled.div`
    display: flex;
    gap: 10px;
    width: 100%;
`;
const ImagePreviewDiv = styled.div`
    width: 100%;
    margin-bottom: 10px;
`;
const ProfileImagePreview = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover; /*
        object-fit: cover; faz a imagem preencher o conteiner sem distorcer (algumas partes são cortadas)

        object-fit: contain; faz a imagem inteira preencher todo o container sem cortes (pode sobrar espaços em branco)
    */
`;

export default function ProfileConfig(){
    const navigate = useNavigate();
    const {id} = useParams(); // retorna string com o valor do parametro :id
    const user = JSON.parse(localStorage.getItem("registeredUsers")).filter(u => u.id === Number(id))[0];

    const ACTIONS = {
        SET_NAME: 'setName',
        SET_EMAIL: 'setEmail',
        SET_PASSWORD: 'setPassword',
        SET_CONFIRM_PASSWORD: 'setConfirmPassword',
        SET_DESCRIPTION: 'setDescription',
        SET_IMAGE: 'setImage'
    };

    const userDataReducer = (state, action) => {
        switch(action.type){
            case ACTIONS.SET_NAME: 
                return {...state, name: action.payload};
            case ACTIONS.SET_EMAIL:
                return {...state, email: action.payload};
            case ACTIONS.SET_PASSWORD:
                return {...state, password: action.payload};
            case ACTIONS.SET_CONFIRM_PASSWORD:
                return {...state, confirmPassword: action.payload}
            case ACTIONS.SET_DESCRIPTION:
                return {...state, description: action.payload};
            case ACTIONS.SET_IMAGE:
                return {...state, image: action.payload};
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(userDataReducer, {...user, confirmPassword: ''});

    const saveChanges= (evt) =>{
        evt.preventDefault();
        const regUsers = JSON.parse(localStorage.getItem("registeredUsers"));

        if(state.confirmPassword){
            if(state.password === state.confirmPassword){
                const {confirmPassword, ...newUser} = state;  // desestrutura o objeto sem a propriedade confirmPassword.
                /* 
                    A varoável confirmPassowrd recebe o valor da propriedade de mesmo nome
                    do objeto state, e o rest operator (...) armzena o restante das variaveis 
                    em um objeto chamado newUser.
                    O rest pega o que sobra da desestruturação do state
                */
                const newRegUsers = [...regUsers.filter(u => u.id !== Number(id)), newUser];
                localStorage.setItem("registeredUsers", JSON.stringify(newRegUsers));
                localStorage.setItem("loggedInUser", JSON.stringify(newUser));
            }
            else{
                alert("As senhas devem ser iguais");
                return;
            }
        }
        else{
            alert("Confirme a senha para salvar");
            return;
        }
        navigate(`/usuario/${state.id}`);
    }

    const returnToProfile = () => {
        navigate(`/usuario/${state.id}`);
    }

    return (
        <Background>
            <Form action="" $width="90%" $maxWidth="500px" $height="90%">
                <ImagePreviewDiv>
                    <ProfileImagePreview src={state.image || DefaultImage}/>
                </ImagePreviewDiv>
                <FieldSet1>
                   
                    <Field
                        label="Nome"
                        value={state.name}
                        type="text"
                        onChange={(e) => dispatch({type: ACTIONS.SET_NAME, payload: e.target.value})}
                    />
                    <Field
                        label="Email"
                        value={state.email}
                        type="email"
                        onChange={(e) => dispatch({type: ACTIONS.SET_EMAIL, payload: e.target.value})}
                    />
                </FieldSet1>
                <FieldSet2>
                    <Field
                        label="Senha"
                        value={state.password}
                        type="password"
                        onChange={(e) => dispatch({type: ACTIONS.SET_PASSWORD, payload: e.target.value})}
                    />
                    <Field
                        label="Confirme a senha"
                        value={state.confirmPassword}
                        type="password"
                        onChange={(e) => dispatch({type: ACTIONS.SET_CONFIRM_PASSWORD, payload: e.target.value})}
                    />
                  
                </FieldSet2>
                 <Field
                        label="Foto de perfil"
                        value={state.image}
                        type="text"
                        onChange={(e) => dispatch({type: ACTIONS.SET_IMAGE, payload: e.target.value})}
                    />
                <Field
                    label="Descrição"
                    value={state.description}
                    type="textarea"
                    onChange={(e) => dispatch({type: ACTIONS.SET_DESCRIPTION, payload: e.target.value})}
                />
                <ButtonSet>
                    <Button onClick={(e) => saveChanges(e)}>Salvar</Button>
                    <Button onClick={returnToProfile}>Voltar ao perfil</Button>
                </ButtonSet>
            </Form>
        </Background>
    );
}