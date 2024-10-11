import React, { createContext, useContext, useState } from 'react';

// Create an AuthContext
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
       
        const storedAuth = localStorage.getItem('isAuthenticated');
        return storedAuth === 'true'; 
    });

    const login = () => {
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', 'true'); 
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('isAuthenticated');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Create a custom hook for easier access to the context
export const useAuth = () => {
    return useContext(AuthContext);
};
