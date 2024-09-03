import styles from './Header.module.css';

const Header = (): React.ReactElement => {
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>The Place</h1>
    </header>
  );
};

export default Header;
