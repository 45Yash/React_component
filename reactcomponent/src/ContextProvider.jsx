// ContextProvider.js
import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const ContextProvider = ({ children }) => {
    const [state, setState] = useState({
        user: 'Guest',
        isLoggedIn: false,
    });

    const updateUser = (user) => {
        setState({ ...state, user, isLoggedIn: true });
    };

    return (
        <AppContext.Provider value={{ state, updateUser }}>
            {children}
        </AppContext.Provider>
    );
};

export default ContextProvider;
