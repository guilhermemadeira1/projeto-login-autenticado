import {Link} from 'react-router-dom';
import useTheme from '../hooks/useTheme';

export default function NavLink({to, children}){
    const {theme, THEMES, STYLES} = useTheme();
    const color = theme === THEMES.DARK? STYLES.DARK.button : STYLES.LIGHT.button;
    const style = {
        color: `${color}` ,
        textDecoration: 'none'
    }
    return <Link to={to} style={style}>{children}</Link>
}