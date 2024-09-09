import Button from "../../../Shared/Components/Button/Button";
import Modal from "../../../Shared/Components/Modal/Modal";

type TProps = {
  isOpen: boolean;
  isLoading: boolean;
  onClose: () => void;
  onClick: () => void;
}

const DeleteCardModal = ({ 
  isOpen, 
  onClose, 
  onClick, 
  isLoading
}: TProps) => {
  
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
  )
}

export default DeleteCardModal;