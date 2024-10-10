import { Button, Modal } from '../../../../temp_shared/ui';

type TProps = {
  isOpen: boolean;
  isLoading: boolean;
  onClose: () => void;
  onClick: () => void;
};

const DeleteCardModal = ({ isOpen, onClose, onClick, isLoading }: TProps) => {
  return (
    <Modal
      isOpen={isOpen}
      title="Delete card?"
      onClose={onClose}
    >
      <Button
        label="Delete"
        type="button"
        ariaLabel="Delete card"
        isLoading={isLoading}
        loadingLabel="Deleting..."
        onClick={onClick}
      />
    </Modal>
  );
};

export default DeleteCardModal;
