import { useImageModal } from '../../model/useImageModal';
import { modalStyles } from '../../../../shared/ui';

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
      className={modalStyles.overlay}
      onClick={handleOverlayClose}
    >
      <div className={modalStyles.imageContainer}>
        <button
          className={modalStyles.buttonClose}
          onClick={onClose}
        />
        <img
          className={modalStyles.image}
          src={link}
          alt={name}
        />
        <p className={modalStyles.imageCaption}>{name}</p>
      </div>
    </div>
  );
};

export default ImageModal;
