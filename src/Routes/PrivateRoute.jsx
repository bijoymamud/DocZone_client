import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({ children }) => {

  const { user, loading } = useContext(AuthContext);
  const location = useLocation();


  if (loading) {
    return <div className='container text-center md:mt-52 md:pb-80'>
      <span className="loading loading-bars  loading-lg"></span>
    </div>

  }

  if (user) {
    return children;
  }
  return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;