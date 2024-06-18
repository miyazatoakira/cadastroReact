import React, { createContext, useContext, useState} from 'react';

const EmailContext = createContext(null);

export function userContext(){
    return useContext(EmailContext);
}

export const EmailProvider = ({children}) =>{
    const [userData, setUserData] = useState({userName: "", emailUser: ""});


    return(
            <EmailContext.Provider value={{userData, setUserData}}>
                {children}
            </EmailContext.Provider>
    )
};