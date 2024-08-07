import React, { createContext, useState } from 'react';

export const flowersData = createContext();

export const FlowersProvider = ({ children }) => {
    const [summerData, setSummerData] = useState([])
    const [category, setCategory] = useState(null)
    const [Summer, setSummer] = useState(``)
    const [pricess, setpricess] = useState(false)
    const [page, setpage] = useState(1)
   const [totalCartProduct, settotalCartProduct] = useState(0)
   const [isLog, setisLog] = useState(false)
   const [search, setSearch] = useState('');
   const [LogSuccess, setLogSuccess] = useState(false)
   

    return (
        <flowersData.Provider value={{
            summerData, setSummerData,
            Summer, setSummer,
            category, setCategory,
            pricess, setpricess,
            page, setpage,
            totalCartProduct, settotalCartProduct,
            isLog, setisLog,
            search, setSearch,
            LogSuccess, setLogSuccess
        }}>
            {children}
        </flowersData.Provider>
    );
};
