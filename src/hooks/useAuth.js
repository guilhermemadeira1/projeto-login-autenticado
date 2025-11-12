import {useContext} from 'react';
import {UserContext} from '../contexts/UserContext';

export default function useAuth(){ // hook personalizado para abstrair o uso do contexto
    const {loggedInUser, login, logout} = useContext(UserContext);
    const isAuthenticaded = !!loggedInUser; // converte o valor truthy ou falsy em boleano

    return {loggedInUser, isAuthenticaded, login, logout};

} 