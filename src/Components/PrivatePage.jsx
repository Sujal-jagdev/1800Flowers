import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivatePage = ({children}) => {
    let isLog = false;
    if(isLog){
        return children
    }
    else{
        alert("First Login")
        return <Navigate to={'/login'}/>
    }
}

export default PrivatePage