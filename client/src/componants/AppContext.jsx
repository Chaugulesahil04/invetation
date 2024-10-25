import React, { createContext, useContext } from "react";

// Create a context with a default value
const AppContext = createContext({});

// Custom hook for using the context
export const useAppContext = () => {
    return useContext(AppContext);
};

// Context provider component
export const AppProvider = ({ children }) => {
    const value = {}; // Add your context values here

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export  {AppContext };
