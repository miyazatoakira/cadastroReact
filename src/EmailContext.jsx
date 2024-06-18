import React, { createContext, useContext, useState} from 'react';

const EmailContext = createContext(null);

export function useEmail(){
    return useContext(EmailContext);
}

export const EmailProvider = ({children}) =>{
    const [email, setEmail] = useState('');

    const setEmailValue = (userEmail) =>{
        setEmail(userEmail);
    };

    const clearEmail = () =>{
        setEmail(null)
    }

    return(
            <EmailContext.Provider value={{email, setEmail: setEmailValue, clearEmail}} >
                {children}
            </EmailContext.Provider>
    )
};