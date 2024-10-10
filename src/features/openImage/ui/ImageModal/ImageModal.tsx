import { useImageModal } from '../../model/useImageModal';
import styles from '../../../../shared/components/Modal/Modal.module.css';

type TProps = {
  isOpen: boolean;
  name: string;
  link: string;
  onClose: () => void;
};

const ImageModal = ({ isOpen, name, link, onClose }: TProps) => {
  const { handleOverlayClose } = useImageModal({ isOpen, onClose });

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
