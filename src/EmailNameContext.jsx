import React, { createContext, useContext, useState } from 'react';

// Cria um contexto para o email e nome
const EmailNameContext = createContext(null);

// Hook personalizado para acessar o contexto
export function useEmailName() {
    return useContext(EmailNameContext);
}

// Provedor de contexto que mantém o estado do email e nome e permite atualizá-los
export const EmailNameProvider = ({ children }) => {
    const [userDetails, setUserDetails] = useState({ email: '', name: '' });

    // Função para definir os valores do email e nome
    const setUserDetailsValue = (email, name) => {
        setUserDetails({ email, name });
    };

    return (
        <EmailNameContext.Provider value={{ userDetails, setUserDetails: setUserDetailsValue }}>
            {children}
        </EmailNameContext.Provider>
    );
};
