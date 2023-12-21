import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import { AuthContext } from '../providers/AuthProvider';

const AdminRoutes = ({ children }) => {

  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin()
  const location = useLocation();


  if (loading || isAdminLoading) {
    return <div className='container text-center md:mt-52 md:pb-80'>
      <span className="loading loading-bars  loading-lg"></span>
    </div>

  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminRoutes;