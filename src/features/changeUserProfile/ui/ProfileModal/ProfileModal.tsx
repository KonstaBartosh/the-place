import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button, Input, Modal } from '../../../../shared/components';
import { updateUserApi } from '../../../../App/api/api';
import { UserContext } from '../../../../entities/user/context/userContext';
import { TUser } from '../../../../App/types/common';
import { profileSchema } from '../../validation/validation';

type TProps = {
  isAvatarModal?: boolean;
  isOpen: boolean;
  onClose: () => void;
};

const ProfileModal = ({ isOpen, onClose }: TProps) => {
  const MODAL_TITLE = 'Change user profile';

  const [isLoading, setIsLoading] = useState(false);

  const { user, setUser } = useContext(UserContext);

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

  const onSubmit = async (data: TUser) => {
    try {
      setIsLoading(true);
      const user = await updateUserApi(data as TUser);
      setUser(user);
      setIsLoading(false);
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal
      title={MODAL_TITLE}
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
