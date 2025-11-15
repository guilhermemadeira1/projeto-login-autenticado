import {createContext, useState, useEffect} from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({children}){
    const THEMES = {LIGHT: 'light', DARK: 'dark'};

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || THEMES.LIGHT;
    });

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    const STYLES = {
        DARK: {
            background1: '#001',
            background2: '#112',
            container: '#115',
            placeholder: '#125',
            heading: '#f06',
            button: '#f06',
            text1: '#fff',
            text2: '#f90',
            shadow: '#fff'
        },
        LIGHT:{
            background1: '#09f',
            background2: '#025',
            container: '#fff',
            placeholder: '#059',
            heading: '#059',
            button: '#f90',
            text1: '#059',
            text2: '#fff',
            shadow: '#001'
           
        }
    }

    const toggleTheme = () => {
        if(theme === THEMES.LIGHT){
            setTheme(THEMES.DARK);
        } 
        else{
            setTheme(THEMES.LIGHT);
        }
    }

    return(
        <ThemeContext.Provider value={{THEMES, STYLES, theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

