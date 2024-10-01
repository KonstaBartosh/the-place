import styles from './Footer.module.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.container}>
      <p className={styles.copyright}>
        &copy; {year} The Place. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
