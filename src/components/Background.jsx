import styled from 'styled-components';

const Background = styled.div`
    background-color: ${({theme}) => theme.background1};
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export default Background;