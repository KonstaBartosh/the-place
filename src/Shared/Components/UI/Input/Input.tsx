import styles from './Input.module.css';

type TInputProps = {
  name: string;
  type: string;
  placeholder?: string;
  defaultValue?: string;
  register: any;
};

const Input = ({
  name,
  type,  
  placeholder,
  defaultValue,
  register,
}: TInputProps) => {

  return(
    <input 
      className={styles.input}
      placeholder={placeholder}
      defaultValue={defaultValue}
      type={type}
      {...register(name)}
    />
  )
}

export default Input;