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
    flex-flow: column nowrap;
    align-items: center;
    height: 350px;
    width: 100%;
    background-color: ${({theme}) => theme.background2};
    padding: 30px;
    border-radius: 3px;
`;
const ProfileImage = styled.img`
    height: 130px;
    width: 130px;
    margin: auto;
    border-radius: 50%;
    object-fit: cover;
`;
const ImageDiv = styled.div`
    display: flex;
    justify-content: center;
    align-itens: center;
    width: 50%;
`;
const Info = styled.div`
    width: 100%;
    text-align: left;
    text-align: center;
`;
const Description = styled.div`
    overflow-y: auto;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 20px;
    border-radius: 3px;
    text-align: justify;
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
            <Container $width="90%" $maxWidth= "450px" $height="90%">
                <Header>
                    <ImageDiv>
                        <ProfileImage src={user.image || DefaultProfileImage}/>
                    </ImageDiv>
                    <Info>
                        <div>
                            <Paragraph $color='#fff' $size='1.2em'><strong> {user.name}</strong></Paragraph>
                            <Paragraph $color='#fff' $size='1.2em'> {user.email}</Paragraph>
                        </div>
                        <div style={{display: 'flex', gap: '10px'}}>
                            <Button onClick={goToProfileConfig}
                            >Editar</Button>
                            <Button onClick={handleLogout}>Sair</Button>
                        </div>
                        
                    </Info>
                </Header>
                <Heading level='1'>Descrição</Heading>
                <Description>
                    <Paragraph size='1.2em'>
                        {user.description || 'Adicione uma descrição'}
                    </Paragraph>
                </Description>

            </Container>
        </Background>
    );
}
