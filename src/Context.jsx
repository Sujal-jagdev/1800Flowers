import React, { createContext, useState } from 'react';

export const flowersData = createContext();

export const FlowersProvider = ({ children }) => {

    return (
        <flowersData.Provider value={''}>
            {children}
        </flowersData.Provider>
    );
};
