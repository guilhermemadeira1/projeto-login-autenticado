import React from 'react'

import Background from '../components/Background';
import Container from '../components/Container';
import ProfileHeader from '../components/ProfileHeader';
import ProfileBody from '../components/ProfileBody';

export default function UserProfile(){
    return (
        <Background>
            <Container $width="70%" $height="500px" $maxWidth="400px">
                <ProfileHeader/>
                <ProfileBody/>
            </Container>
        </Background>
    );
}
