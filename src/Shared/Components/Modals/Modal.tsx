import styles from './Styles/Modal.module.css';

type TProps = {
  isOpen: boolean;
  children?: React.ReactNode;
  title?: string;
  onClose: () => void;
};

const Modal = ({ 
  isOpen,
  title, 
  children, 
  onClose,
}: TProps) => {

  const handleOverlayClose = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return;

  return (
    <div className={styles.overlay} onClick={handleOverlayClose}>
      <div className={styles.container}>
        <button className={styles.buttonClose} onClick={onClose} />
        <h3 className={styles.title}>{title}</h3>
        {children}
      </div>
    </div>
  );
};

export default Modal;
