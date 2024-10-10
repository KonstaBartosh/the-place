import styles from './AuthForm.module.css';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { authSchema } from '../../validation/validation';
import { Input, Button } from '../../../../shared/components';

type TProps = {
  formTitle: string;
  buttonLabel: string;
  buttonAriaLabel: string;
  onSubmit: any;
  formType: 'login' | 'register';
};

const AuthForm = ({
  formTitle,
  onSubmit,
  buttonLabel,
  buttonAriaLabel,
  formType,
}: TProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(authSchema),
  });

  return (
    <form
      className={styles.container}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <h1>{formTitle}</h1>
      <Input
        register={register}
        name="email"
        type="email"
        placeholder="Email"
        message={errors.email?.message}
      />
      <Input
        register={register}
        name="password"
        type="password"
        placeholder="Password"
        message={errors.password?.message}
      />
      <Button
        type="submit"
        label={buttonLabel}
        ariaLabel={buttonAriaLabel}
        loadingLabel="Processing..."
        disabled={!isDirty}
      />
      <p className={styles.link}>
        {formType === 'login' ? (
          <>
            Don't have an account? <Link to="/register">Register</Link>
          </>
        ) : (
          <>
            Already have an account? <Link to="/login">Login</Link>
          </>
        )}
      </p>
    </form>
  );
};

export default AuthForm;
