import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    
    align-items: center;
    background-color: ${({theme}) => theme.container}; /* desestruturação da prop background. O $ impede que a prop seja passada pro dom real no html*/
    padding: 20px;
    border-radius: 3px;
    box-shadow: 1px 1px 1px 1px ${({theme}) => theme.container};

    width: ${({$width}) => $width || 'min-content'};
    height: ${({$height}) => $height || 'min-content'};

    max-width: ${({$maxWidth}) => $maxWidth || 'none'};
`;

export default Container;

// criar um componente unico para o formulario e o conteiner de perfil