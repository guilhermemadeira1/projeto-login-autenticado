import styled from 'styled-components';

import Button from './Button';
import Paragraph from './Paragraph';
import Image from '../assets/react.svg';
import Heading from './Heading';

const Header = styled.div`
    display: flex;
    flexFlow: row nowrap;
    justify-content: space-between;
    width: 100%;
    height: 200px;
    background-color: #20f;
    padding: 20px;
`;
const ProfileImage = styled.img`
    width: 70%;
    border-radius: 50%;
`;
const ImageDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align: itens: center;
`;
const Info = styled.div`
    padding: 10px;
    text-align: left; 
`;

export default function ProfileHeader(){
    return(
        <>
        <Heading level='1'>Perfil</Heading>
        <Header>
            <ImageDiv>
                <ProfileImage src={Image}/>
            </ImageDiv>
            <Info>
                <Paragraph color='#fff' size='1.2em'><strong> Usuario</strong></Paragraph>
                <Paragraph color='#fff' size='1.2em'>user123@gmail.com</Paragraph>
                <Button>Sair</Button>
            </Info>
        </Header>
        </>
    );
}

