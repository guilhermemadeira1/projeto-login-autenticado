import styled from 'styled-components';
import useTheme from '../hooks/useTheme';

const ThemeBtn = styled.button`
    position: fixed;
    top: 2%;
    left: 2%;
    border-radius: 50%;
    border-style: none;
    font-size: 1.1em;
    background-color: ${({theme}) => theme.container};
    padding: 8px;
    cursor: pointer;
`;

export default function ThemeButton(){
    const {theme, THEMES, toggleTheme} = useTheme();
    return (
        <ThemeBtn onClick={toggleTheme}>
            {theme === THEMES.LIGHT? '🌙' : '☀️'}
        </ThemeBtn>
    );
}


