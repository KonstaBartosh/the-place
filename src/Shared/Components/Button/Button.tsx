import styles from "./Button.module.css";

type TButtonProps = {
  type: "button" | "submit" | "reset" ;
  ariaLabel: string;
  label?: string;
  disabled?: boolean;
  onClick?: () => void;
};

const Button = ({
  type,
  ariaLabel,
  label = 'Save', 
  disabled, 
  onClick 
}: TButtonProps) => {
  return (
    <button
      className={styles.button}
      aria-label={ariaLabel}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
