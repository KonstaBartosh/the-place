import styles from './CardLayout.module.css';

type CardLayoutProps = {
  children: React.ReactNode;
};

const CardLayout = ({ children }: CardLayoutProps): React.ReactElement => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default CardLayout;