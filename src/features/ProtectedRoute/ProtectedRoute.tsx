import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const isToken = localStorage.getItem('token') ? true : false;

  return isToken ? <Navigate to="/" /> : <Outlet />;
};

export default ProtectedRoute;
