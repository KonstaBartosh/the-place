import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthForm, TAuthData, loginModel } from '../../../features/auth';
import { AuthContext } from '../../../App/contexts';

const LoginPage = () => {
  const { loginUser } = loginModel.useLogin();
  const { setLoggedin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (data: TAuthData) => {
    try {
      await loginUser(data);
      navigate('/', { replace: true });
      setLoggedin(true);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <AuthForm
      formTitle="Login"
      buttonLabel="Login"
      buttonAriaLabel="Submit login form"
      onSubmit={handleLogin}
      formType="login"
    />
  );
};

export default LoginPage;
