import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from '../../../features';
import { useAuth } from '../model/useAuth';
import styles from './Header.module.css';

const Header = (): React.ReactElement => {
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';

  const { isLoggedin, handleLogout } = useAuth();

  return (
    <header className={styles.container}>
      <h1 className={styles.title}>The Place</h1>
      <div className={styles.options}>
        <ThemeToggle />
        {isHomePage &&
          (isLoggedin ? (
            <button
              className={styles.link}
              onClick={handleLogout}
              aria-label="Logout"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">Login</Link>
          ))}
      </div>
    </header>
  );
};

export default Header;
