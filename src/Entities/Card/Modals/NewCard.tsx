import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Modal from "../../../Shared/Components/Modal/Modal";
import Button from "../../../Shared/Components/UI/Button/Button";
import Input from "../../../Shared/Components/UI/Input/Input";

import { postCard } from "../../../Shared/Api/api";
import { CardsContext } from "../../../Shared/Context/CardsContext";
import { schema } from "../Validation/Validation";

type TProps ={
  isOpen: boolean;
  onClose: () => void;
}

const NewCardModal = ({isOpen, onClose}: TProps) => {
  const MODAL_TITLE = 'Add new card';
  const PLACEHOLDER_TITLE = 'Title';
  const PLACEHOLDER_LINK = 'Insert url';

  const { cards, setCards } = useContext(CardsContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty }
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const handleClose = () => {
    onClose();
    reset();
  }

  const onSubmit = async (data: any)  => {
    try {
      const { name, link } = data;
      const newCard = await postCard(name, link);
      console.log(newCard);
      setCards([newCard, ...cards]);
      handleClose();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Modal 
      title={MODAL_TITLE} 
      isOpen={isOpen} 
      onClose={handleClose}
      >
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
          label="Создать" 
          type="submit"
          disabled={!isDirty} 
          />
      </form>
    </Modal>
  )
}

export default NewCardModal;