import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Modal from "../../../Shared/Components/Modal/Modal";
import Button from "../../../Shared/Components/Button/Button";
import Input from "../../../Shared/Components/Input/Input";

import { CardsContext } from "../../../Shared/Context/CardsContext";
import { schema } from "../Validation/Validation";
import { postCardApi } from "../../Profile/Api/ProfileApi";

type TProps ={
  isOpen: boolean;
  onClose: () => void;
}

const NewCardModal = ({isOpen, onClose}: TProps) => {
  const MODAL_TITLE = 'Post new card';
  const PLACEHOLDER_TITLE = 'Title';
  const PLACEHOLDER_LINK = 'Insert url';

  const [isLoading, setIsLoading] = useState(false);

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
      setIsLoading(true);
      const newCard = await postCardApi(name, link);
      setCards([newCard, ...cards]);
      setIsLoading(false);
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
      <form 
        style={{ paddingTop: "30px" }}
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
  )
}

export default NewCardModal;