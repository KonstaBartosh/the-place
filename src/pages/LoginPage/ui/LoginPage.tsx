import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { authorizeApi } from '../../../App/api/api';
import { AuthForm } from '../../../features';
import { AuthContext } from '../../../App/contexts';

const LoginPage = () => {
  const navigate = useNavigate();

  const { setLoggedin } = useContext(AuthContext);

  const onLogin = async (data: any) => {
    try {
      const jwt = await authorizeApi(data);
      navigate('/');
      setLoggedin(true);
      localStorage.setItem('token', jwt.token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthForm
      formTitle="Login"
      buttonLabel="Login"
      buttonAriaLabel="Submit login form"
      onSubmit={onLogin}
      formType="login"
    />
  );
};

export default LoginPage;
