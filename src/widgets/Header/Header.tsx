import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from '../../features/themeToggle/ui/ThemeToggle/ThemeToggle';
import styles from './Header.module.css';

const Header = (): React.ReactElement => {
  const location = useLocation();

  const isHome = location.pathname === '/';

  const HomeLink = () => (
    <Link
      to="/"
      className={styles.link}
    >
      Home
    </Link>
  );

  const LoginLink = () => (
    <Link
      to="/login"
      className={styles.link}
    >
      Login
    </Link>
  );

  return (
    <header className={styles.container}>
      <h1 className={styles.title}>The Place</h1>
      <div className={styles.options}>
        <ThemeToggle />
        {!isHome ? <HomeLink /> : <LoginLink />}
      </div>
    </header>
  );
};

export default Header;
