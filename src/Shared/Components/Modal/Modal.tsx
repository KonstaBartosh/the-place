import styles from './Modal.module.css';
import { useModalClose } from '.';

type TProps = {
  isOpen: boolean;
  children?: React.ReactNode;
  title?: string;
  onClose: () => void;
};

const Modal = ({ isOpen, title, children, onClose }: TProps) => {
  const { handleOverlayClose } = useModalClose({ isOpen, onClose });

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
