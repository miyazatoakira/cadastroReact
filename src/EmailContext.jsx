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

    return(
            <EmailContext.Provider value={{email, setEmail: setEmailValue}} >
                {children}
            </EmailContext.Provider>
    )
};
