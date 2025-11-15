import {Link} from 'react-router-dom';
import useTheme from '../hooks/useTheme';

export default function NavLink({to, children}){
    const {theme, STYLES} = useTheme();
    const linkStyle = STYLES[theme.toUpperCase()].button;
    const style = {
        color: `${linkStyle}` ,
        textDecoration: 'none'
    }
    return <Link to={to} style={style}>{children}</Link>
}