import { useEffect } from 'react';
import styles from '../../../../shared/components/Modal/Modal.module.css';

type TProps = {
  isOpen: boolean;
  name: string;
  link: string;
  onClose: () => void;
};

const ImageModal = ({ isOpen, name, link, onClose }: TProps) => {
  const handleOverlayClose = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
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

    if (!isOpen) {
      return window.removeEventListener('keydown', handleCloseByEscape);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={styles.overlay}
      onClick={handleOverlayClose}
    >
      <div className={styles.imageContainer}>
        <button
          className={styles.buttonClose}
          onClick={onClose}
        />
        <img
          className={styles.image}
          src={link}
          alt={name}
        />
        <p className={styles.imageCaption}>{name}</p>
      </div>
    </div>
  );
};

export default ImageModal;
