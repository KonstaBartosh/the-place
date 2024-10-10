import { useEffect } from 'react';

type TProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const useImageModal = ({ isOpen, onClose }: TProps) => {
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

    return () => {
      window.removeEventListener('keydown', handleCloseByEscape);
    };
  }, [isOpen]);

  return { handleOverlayClose };
};
