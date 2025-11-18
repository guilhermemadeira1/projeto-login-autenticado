import {css} from 'styled-components'; // helper css

const containerStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${({theme}) => theme.container}; /* desestruturação da prop background. O $ impede que a prop seja passada pro dom real no html*/
    padding: 20px;
    border-radius: 3px;
    box-shadow: 0px 0px 0px 1px ${({theme}) => theme.shadow};
    width: ${({$width}) => $width || 'min-content'};
    height: ${({$height}) => $height || 'min-content'};
    max-width: ${({$maxWidth}) => $maxWidth || 'none'};
`;

export default containerStyle;