import {css} from 'styled-components';

const inputStyle = css`
    width: 100%;
    padding: 8px;
    border: solid 1px ${({theme}) => theme.text1};
    color: ${({theme}) => theme.text1};
    background-color: ${({theme}) => theme.inputBackground};
    font-size: 1em;
    border-radius: 3px;
`;

export default inputStyle;