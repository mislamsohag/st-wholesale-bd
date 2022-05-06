import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../Firebase.init';


const PrivateRoute = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);

    let location = useLocation();

    if (!user) {
        //if user is not login then it is carry on go to login page.
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default PrivateRoute;