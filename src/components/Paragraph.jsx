import styled from 'styled-components';

const Paragraph = styled.p`
    color: ${({$color, theme}) => $color || theme.text1};
    font-size: ${({$size}) => $size || 'auto'};
    font-weight: ${({$weight}) => $weight || 'normal'};
    overflow-wrap: break-word; /*quebra para linha de baixo quando não houver espaço*/
`;
export default Paragraph;