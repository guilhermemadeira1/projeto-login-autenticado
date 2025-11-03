import React, {createContext, useState} from 'react';

export const UserContext = createContext();

export function UserProvider ({children}){
    const [loggedInUser, setLoggedInUser] = useState(
        {
            name: "Usuario",
            email: "usuario123@gmail.com",
            password: "123456"
        }
    );

    const loginUser = (user) => {
        if(user.name === loggedInUser.name && user.email === loggedInUser.email && user.password === loggedInUser.password){
            
            
        }
    }
    return(
        <UserContext.Provider value={""}>
            {children}
        </UserContext.Provider>
    );
}