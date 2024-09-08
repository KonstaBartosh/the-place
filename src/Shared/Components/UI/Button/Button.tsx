import styles from "./Button.module.css";

type TButtonProps = {
  type: "button" | "submit" | "reset" | undefined;
  label?: string;
  disabled?: boolean;
  onClick?: () => void;
};

const Button = ({
  type, 
  label = 'Save', 
  disabled, 
  onClick 
}: TButtonProps) => {
  return (
    <button
      className={styles.button}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
