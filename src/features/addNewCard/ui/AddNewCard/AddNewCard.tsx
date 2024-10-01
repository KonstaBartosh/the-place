import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button, Input, Modal } from '../../../../shared/components';

import { CardsContext } from '../../../../App/contexts';
import { postCardApi } from '../../../../App/api/api';
import { schema } from '../../validation/validation';

type TProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AddNewCard = ({ isOpen, onClose }: TProps) => {
  const MODAL_TITLE = 'Post new card';
  const PLACEHOLDER_TITLE = 'Title';
  const PLACEHOLDER_LINK = 'Insert url';

  const [isLoading, setIsLoading] = useState(false);

  const { cards, setCards } = useContext(CardsContext);

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

  const onSubmit = async (data: any) => {
    try {
      const { name, link } = data;
      setIsLoading(true);
      const newCard = await postCardApi(name, link);
      setCards([newCard, ...cards]);
      setIsLoading(false);
      handleClose();
    } catch (error: unknown) {
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
