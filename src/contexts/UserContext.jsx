import React, {createContext, useState, useMemo} from 'react';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();

export function UserProvider ({children}){
    const [loggedInUser, setLoggedInUser] = useState(() => {
        const user = localStorage.getItem("loggedInUser");
        return user? JSON.parse(user) : null;
    });

    const regUsers = JSON.parse(localStorage.getItem("registeredUsers"));
    const navigate = useNavigate();

    const login = (user) => {
        if(loggedInUser){
            alert(`Usuário ${loggedInUser.name} já está logado`);
        }
        if(regUsers.length > 0){
            const hasUser = regUsers.some(u => 
                u.name === user.name &&
                u.email === user.email &&
                u.password === user.password
            );
            if(hasUser){
                setLoggedInUser(user);
                localStorage.setItem("loggedInUser", JSON.stringify(user));
                navigate("/perfil");
            }
        }
    }
    const logout = () => {
        if(loggedInUser){
            setLoggedInUser(null);
            localStorage.setItem("loggedInUser");
            navigate("/login");
        }
    }

    return(
        <UserContext.Provider value={{login, logout, loggedInUser}}>
            {children}
        </UserContext.Provider>
    );
}