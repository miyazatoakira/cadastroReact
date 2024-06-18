import React, { createContext, useContext, useState} from 'react';

const EmailContext = createContext(null);

export function useEmail(){
    return useContext(EmailContext);
}

export const EmailProvider = ({children}) =>{
    const [email, setEmail] = useState('');
    const [user, setUser] = useState('')

    const setEmailValue = (userEmail) =>{
        setEmail(userEmail);
    };

    const setUserValue = (userName) =>{
        setUser(userName);
    }
    const clearAlll = () =>{
        setEmail(null);
        setUser(null);
    }

    return(
            <EmailContext.Provider value={{email, user, setEmail: setEmailValue, setUser: setUserValue}} >
                {children}
            </EmailContext.Provider>
    )
};