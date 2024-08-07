import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { flowersData } from '../Context';
import Summer from '../Pages/Summer';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../Services/firebase';

const PrivatePage = ({ children }) => {
    const { isLog, setisLog,LogSuccess } = useContext(flowersData)
    const [user] = useAuthState(auth);
    if (user || LogSuccess) {
        return children
    }
    else {
        alert("After Login You Can Access All Features And Pages")
        return <Navigate to={'/login'} />
    }
}

export default PrivatePage