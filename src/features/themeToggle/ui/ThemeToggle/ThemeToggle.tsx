import styles from './ThemeToggle.module.css';
import { useTheme } from '../../model/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <button
        className={styles.button}
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      />
    </div>
  );
};

export default ThemeToggle;
