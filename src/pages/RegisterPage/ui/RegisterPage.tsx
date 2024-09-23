import { useNavigate } from 'react-router-dom';
import { registerApi } from '../../../App/api/api';
import { AuthForm } from '../../../features';

const RegisterPage = () => {
  const navigate = useNavigate();

  const onRegister = async (data: any) => {
    try {
      const newUser = await registerApi(data);
      navigate('/login');
      // TODO add toast notification
      return newUser;
    } catch (error) {
      // Handle error message display
      console.error(error);
    }
  };

  return (
    <AuthForm
      formTitle="Register"
      buttonLabel="Register"
      buttonAriaLabel="Submit register form"
      onSubmit={onRegister}
      formType="register"
    />
  );
};

export default RegisterPage;
