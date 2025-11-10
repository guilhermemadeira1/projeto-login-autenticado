import {Link} from 'react-router-dom';

export default function NavLink({to, children}){
    const style = {
        color: '#f90',
        textDecoration: 'none'
    }
    return <Link to={to} style={style}>{children}</Link>
}