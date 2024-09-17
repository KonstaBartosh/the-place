import { SyntheticEvent, useEffect } from 'react';
import styles from './Modal.module.css';

type TProps = {
  isOpen: boolean;
  children?: React.ReactNode;
  title?: string;
  onClose: () => void;
};

const Modal = ({ isOpen, title, children, onClose }: TProps) => {
  const handleOverlayClose = (evt: SyntheticEvent) => {
    console.log('click')
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  const handleCloseByEscape = (evt: KeyboardEvent) => {
    if (evt.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleCloseByEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleCloseByEscape);
    }
    
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={styles.overlay}
      onClick={handleOverlayClose}
    >
      <div className={styles.container}>
        <button
          className={styles.buttonClose}
          onClick={onClose}
        />
        <h3 className={styles.title}>{title}</h3>
        {children}
      </div>
    </div>
  );
};

export default Modal;
