import styled from 'styled-components';

const Paragraph = styled.p`
    color: ${({color}) => color || '#059'};
    font-size: ${({size}) => size || 'auto'};
    font-weight: ${({weight}) => weight || 'normal'};
`;
export default Paragraph;