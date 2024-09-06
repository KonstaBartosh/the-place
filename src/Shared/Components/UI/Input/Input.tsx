import styles from './Input.module.css';

type TInputProps = {
  type: string;
  name: string;
  placeholder?: string;
  value: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  type, 
  name,
  value, 
  placeholder, 
  required, 
  minLength, 
  maxLength,
  onChange
}: TInputProps) => {
  return(
    <input 
      className={styles.input}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      minLength={minLength}
      maxLength={maxLength}
      required={required}
      onChange={onChange}
    />
  )
}

export default Input;