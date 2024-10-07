import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button, Input, Modal } from '../../../../shared/components';

import { TUser } from '../../../../App/types/common';
import { avatarSchema } from '../../validation/validation';
import { updateAvatarApi } from '../../../../App/api/api';
import { UserContext } from '../../../../entities/user';

type TProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AvatarModal = ({ isOpen, onClose }: TProps) => {
  const MODAL_TITLE = 'Change user picture';

  const [isLoading, setIsLoading] = useState(false);

  const { user, setUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(avatarSchema),
    mode: 'onSubmit',
  });

  const onSubmit = async (data: TUser) => {
    try {
      setIsLoading(true);
      const user = await updateAvatarApi(data as TUser);
      setUser(user);
      setIsLoading(false);
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  const handleClose = () => {
    reset();
    onClose();
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
