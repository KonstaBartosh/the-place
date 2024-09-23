import { useNavigate } from 'react-router-dom';
import { authorizeApi } from '../../../App/api/api';
import { AuthForm } from '../../../features';

const LoginPage = () => {
  const navigate = useNavigate();

  const onLogin = async (data: any) => {
    try {
      const jwt = await authorizeApi(data);
      navigate('/');
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
