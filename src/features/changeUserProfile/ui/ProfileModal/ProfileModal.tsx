import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useUpdateUser } from '../../model/useUpdateUser';
import { profileSchema } from '../../validation/validation';
import { Button, Input, Modal } from '../../../../shared/ui';

type TProps = {
  isAvatarModal?: boolean;
  isOpen: boolean;
  onClose: () => void;
};

const ProfileModal = ({ isOpen, onClose }: TProps) => {
  const TITLE = 'Change user profile';

  const { isLoading, user, onSubmit } = useUpdateUser({ onClose });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(profileSchema),
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
          name="name"
          type="text"
          defaultValue={user?.name}
          register={register}
          message={errors.name?.message}
        />
        <Input
          name="about"
          type="text"
          defaultValue={user?.about}
          register={register}
          message={errors.about?.message}
        />
        <Button
          type="submit"
          isLoading={isLoading}
          ariaLabel="Update profile"
          disabled={!isDirty}
        />
      </form>
    </Modal>
  );
};

export default ProfileModal;
