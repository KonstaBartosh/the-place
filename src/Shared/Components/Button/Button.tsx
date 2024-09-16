import styles from './Button.module.css';

type TButtonProps = {
  type: 'button' | 'submit' | 'reset';
  ariaLabel: string;
  label?: string;
  disabled?: boolean;
  isLoading?: boolean;
  loadingLabel?: string;
  onClick?: () => void;
};

const Button = ({
  type,
  ariaLabel,
  label = 'Save',
  loadingLabel = 'Saving...',
  disabled,
  isLoading,
  onClick,
}: TButtonProps) => {
  return (
    <button
      className={styles.button}
      aria-label={ariaLabel}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {isLoading ? loadingLabel : label}
    </button>
  );
};

export default Button;
