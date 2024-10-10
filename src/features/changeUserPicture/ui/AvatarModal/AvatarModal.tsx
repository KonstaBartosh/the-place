import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Input, Modal } from '../../../../shared/components';
import { avatarSchema } from '../../validation/validation';
import { useUpdateAvatar } from '../../model/useUpdateAvatar';

type TProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AvatarModal = ({ isOpen, onClose }: TProps) => {
  const TITLE = 'Change user picture';
  const { isLoading, user, onSubmit } = useUpdateAvatar({ onClose });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(avatarSchema),
    mode: 'onSubmit',
  });

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <Modal
      title={TITLE}
      isOpen={isOpen}
      onClose={handleClose}
    >
      <form
        style={{ paddingTop: '30px' }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          name="avatar"
          type="url"
          defaultValue={user?.avatar}
          register={register}
          message={errors.avatar?.message}
        />
        <Button
          type="submit"
          ariaLabel="Update avatar"
          isLoading={isLoading}
          disabled={!isDirty}
        />
      </form>
    </Modal>
  );
};

export default AvatarModal;
