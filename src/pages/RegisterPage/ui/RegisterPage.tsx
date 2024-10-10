import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthForm, TAuthData, registerModel } from '../../../features/auth';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { registerUser } = registerModel.useRegister();

  const onRegister = async (data: TAuthData) => {
    try {
      await registerUser(data);
      navigate('/login', { replace: true });
      toast.success('Registration successful');
    } catch (error: any) {
      toast.error(error.message);
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
