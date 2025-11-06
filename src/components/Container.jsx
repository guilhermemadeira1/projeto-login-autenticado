import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    
    align-items: center;
    background-color: ${({background}) => background || '#fff'}; /* desestruturação da prop background*/
    padding: 20px;
    border-radius: 3px;
    box-shadow: 1px 1px 1px 1px #000;

    width: ${({width}) => width || 'min-content'};
    height: ${({height}) => height || 'min-content'};

    max-width: ${({maxWidth}) => maxWidth || 'auto'};
`;

export default Container;