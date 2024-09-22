import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from '../../../features';

import styles from './Header.module.css';
import { useTokenStatus } from '../model/useTokenStatus';
import { useLogout } from '../model/useLogut';

const Header = (): React.ReactElement => {
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';

  const { hasToken, setHasToken } = useTokenStatus();
  const { handleLogout } = useLogout(setHasToken)

  return (
    <header className={styles.container}>
      <h1 className={styles.title}>The Place</h1>
      <div className={styles.options}>
        <ThemeToggle />
        {isHomePage &&
          (hasToken ? (
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
