import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthForm, TAuthData, loginModel } from '../../features/auth';
import { AuthContext } from '../../entities/user';

const LoginPage = () => {
  const { loginUser } = loginModel.useLogin();
  const { isLoggedin, setLoggedin } = useContext(AuthContext);

  const navigate = useNavigate();

  const onLogin = async (data: TAuthData) => {
    try {
      await loginUser(data);

      setLoggedin(true);

      navigate('/', { replace: true });
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (isLoggedin) onLogin;
  }, [isLoggedin]);

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
