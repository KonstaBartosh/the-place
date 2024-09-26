import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from '../../../features';
import { AuthContext } from '../../../App/contexts';
import { useHandleLogout } from '../model/useHandleLogout';
import styles from './Header.module.css';

const Header = (): React.ReactElement => {
  const { isLoggedin } = useContext(AuthContext);
  const { handleLogout } = useHandleLogout();
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';

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
