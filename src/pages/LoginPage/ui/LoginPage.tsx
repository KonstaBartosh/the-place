import styles from './LoginPage.module.css';
import { useForm } from 'react-hook-form';
import { Button, Input } from '../../../shared/components';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form
      className={styles.container}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1>Login</h1>
      <Input
        register={register}
        name="email"
        type="email"
        placeholder="Email"
      />
      <Input
        register={register}
        name="password"
        type="password"
        placeholder="Password"
      />
      <Button
        type="submit"
        label="Login"
        loadingLabel="Logining..."
        ariaLabel="Submit login form"
        disabled={!isDirty}
      />
    </form>
  );
};

export default LoginPage;
