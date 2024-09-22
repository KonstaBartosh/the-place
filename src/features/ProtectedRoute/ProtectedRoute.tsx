import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const isToken = localStorage.getItem('token');

  console.log(isToken);

  return isToken ? <Navigate to='/' /> : <Outlet />;
};

export default ProtectedRoute;
