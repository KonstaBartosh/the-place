import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAddCard } from '../../model/useAddCard';
import { schema } from '../../validation/validation';
import { Button, Input, Modal } from '../../../../shared/ui';

type TProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AddNewCard = ({ isOpen, onClose }: TProps) => {
  const MODAL_TITLE = 'Post new card';
  const PLACEHOLDER_TITLE = 'Title';
  const PLACEHOLDER_LINK = 'Insert url';

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const handleClose = () => {
    onClose();
    reset();
  };

  const { isLoading, onSubmit } = useAddCard({ handleClose });

  return (
    <Modal
      title={MODAL_TITLE}
      isOpen={isOpen}
      onClose={handleClose}
    >
      <form
        style={{ paddingTop: '30px' }}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <Input
          type="text"
          name="name"
          placeholder={PLACEHOLDER_TITLE}
          register={register}
          message={errors.name?.message}
        />
        <Input
          type="url"
          name="link"
          placeholder={PLACEHOLDER_LINK}
          register={register}
          message={errors.link?.message}
        />
        <Button
          type="submit"
          isLoading={isLoading}
          ariaLabel="Post new card"
          disabled={!isDirty}
        />
      </form>
    </Modal>
  );
};

export default AddNewCard;
