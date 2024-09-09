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
   let Summerr = 'http://localhost:8000/Summer';
   let Birthday = 'http://localhost:8000/Birthday';
   let Sympathy = 'http://localhost:8000/Sympathy';
   let Flowers = 'http://localhost:8000/Flowers';
   let Plants = 'http://localhost:8000/Plants';
   let Gift_Baskets = 'http://localhost:8000/Gift-Baskets';
   

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
            LogSuccess, setLogSuccess,Summerr,Birthday,Flowers,Plants,Gift_Baskets,Sympathy
        }}>
            {children}
        </flowersData.Provider>
    );
};
