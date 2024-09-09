import styles from './Styles/Modal.module.css';

type TProps = {
  isOpen: boolean;
  name: string;
  link: string;
  onClose: () => void;
};

const ImageModal = ({ 
  isOpen,
  name, 
  link, 
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
      <div className={styles.imageContainer}>
        <button className={styles.buttonClose} onClick={onClose} />
        <img 
          className={styles.image} 
          src={link} 
          alt={name}
          />
        <p className={styles.imageCaption}>
          {name}
        </p>
      </div>
    </div>
  );
};

export default ImageModal;
