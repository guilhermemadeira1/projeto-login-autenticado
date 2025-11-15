import {useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';

export default function useTheme(){
    const {theme, toggleTheme, THEMES, STYLES} = useContext(ThemeContext);
    return {theme, toggleTheme, THEMES, STYLES};
}