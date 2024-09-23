import { useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ThemeToggle } from '../../../features';
import { AuthContext } from '../../../App/contexts';
import styles from './Header.module.css';

const Header = (): React.ReactElement => {
  const { isLoggedin, setLoggedin } = useContext(AuthContext);

  const navigate = useNavigate();

  const { pathname } = useLocation();

  const isHomePage = pathname === '/';

  // Display logout button only if user is logged in
  useEffect(() => {
    const isToken = localStorage.getItem('token');
    setLoggedin(!!isToken);
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedin(false);
    navigate('/login', { replace: true });
  };

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
