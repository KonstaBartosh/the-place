import { useLocation } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  const year = new Date().getFullYear();

  const { pathname } = useLocation();
  const isHomePage = pathname === '/';

  return (
    isHomePage && (
      <footer className={styles.container}>
        <p className={styles.copyright}>
          &copy; {year} The Place. All rights reserved.
        </p>
      </footer>
    )
  );
};

export default Footer;
