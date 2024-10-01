import styles from './Input.module.css';
import { UseFormRegister, FieldValues } from 'react-hook-form';

type TInputProps = {
  name: string;
  type: string;
  placeholder?: string;
  defaultValue?: string;
  register: UseFormRegister<FieldValues>;
  message?: string | undefined;
};

const Input = ({
  name,
  type,
  placeholder,
  defaultValue,
  register,
  message,
}: TInputProps) => {
  return (
    <>
      <input
        className={styles.input}
        placeholder={placeholder}
        defaultValue={defaultValue}
        type={type}
        {...register(name)}
      />
      <span className={styles.errorText}>{message}</span>
    </>
  );
};

export default Input;
