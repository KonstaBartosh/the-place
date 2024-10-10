import { SyntheticEvent, useEffect } from 'react';

type TProps = {
  isOpen: boolean;
  onClose: () => void;
};

const useModalClose = ({ isOpen, onClose }: TProps) => {
  const handleOverlayClose = (evt: SyntheticEvent) => {
    if (evt.target === evt.currentTarget) onClose();
  };

  useEffect(() => {
    const handleCloseByEscape = (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleCloseByEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleCloseByEscape);
    };
  }, [isOpen]);

  return { handleOverlayClose };
};

export default useModalClose;