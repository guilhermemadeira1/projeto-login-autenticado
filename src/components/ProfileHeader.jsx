import styled from 'styled-components';

import Button from './Button';
import Paragraph from './Paragraph';
import Image from '../assets/default-profile-image.png';
import Heading from './Heading';
import {useNavigate, useLocation} from 'react-router-dom';

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
    width: 100%;
    max-width: 130px;
    margin: auto;
    border-radius: 50%;
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

export default function ProfileHeader(){
    const navigate = useNavigate();
    const location = useLocation(); 
    const user = location.state;

    const handleLogout = () => {
        navigate("/login");
    };

    return(
        <>
        <Heading level='1'>Perfil</Heading>
        <Header>
            <ImageDiv>
                <ProfileImage src={Image}/>
            </ImageDiv>
            <Info>
                <Paragraph $color='#fff' $size='1.2em'><strong> {user.name}</strong></Paragraph>
                <Paragraph $color='#fff' $size='1.2em'> {user.email}</Paragraph>
                <Button onClick={handleLogout}>Sair</Button>
            </Info>
        </Header>
        </>
    );
}

