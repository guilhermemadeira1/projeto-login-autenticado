import React from 'react'

import styled from 'styled-components';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import DefaultProfileImage from '../assets/default-profile-image.png';
import Heading from '../components/Heading';
import Background from '../components/Background';
import Container from '../components/Container';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Header = styled.div`
    display: flex;
    flexFlow: row nowrap;
    justify-content: space-between;
    width: 100%;
    height: 200px;
    background-color: ${({theme}) => theme.background2};
    padding: 20px;
`;
const ProfileImage = styled.img`
    width: 100%;
    height: 75%;
    max-width: 130px;
    margin: auto;
    border-radius: 50%;
    object-fit: cover;
`;
const ImageDiv = styled.div`
    display: flex;
    justify-content: center;
    align: itens: center;
    width: 50%;
`;
const Info = styled.div`
    width: 60%;
    padding: 10px;
    text-align: left; 
`;
const Description = styled.div`
    overflow-y: auto;
    width: 100%;
    height: 100px;
    margin-bottom: 20px;
    border-radius: 3px;
`;

export default function UserProfile(){
    const {logout} = useAuth();
    const {id} = useParams(); // o parametro id da url é retornado como string
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("registeredUsers")).filter(u => u.id === Number(id))[0];

    const handleLogout = () => {
        logout(user);
    };

    const goToProfileConfig = () =>{
        navigate(`/usuario/${user.id}/config`)
    };

    return (
        <Background>
            <Container $width="70%"$maxWidth= "400px"$height="80%">
                <Heading level='1'>Perfil</Heading>
                <Header>
                    <ImageDiv>
                        <ProfileImage src={user.image || DefaultProfileImage}/>
                    </ImageDiv>
                    <Info>
                        <Paragraph $color='#fff' $size='1.2em'><strong> {user.name}</strong></Paragraph>
                        <Paragraph $color='#fff' $size='1.2em'> {user.email}</Paragraph>
                        <Button onClick={goToProfileConfig}>Editar</Button>
                    </Info>
                </Header>
                <Heading level='2'>Descrição</Heading>
                <Description>
                    <Paragraph size='1.2em'>
                        {user.description || 'Adicione uma descrição'}
                    </Paragraph>
                </Description>
                <Button onClick={handleLogout}>Sair</Button>
            </Container>
        </Background>
    );
}
