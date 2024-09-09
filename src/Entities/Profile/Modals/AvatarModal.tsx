import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Modal from "../../../Shared/Components/Modal/Modal";
import Input from "../../../Shared/Components/Input/Input";
import Button from "../../../Shared/Components/Button/Button";

import { UserContext } from "../../../Shared/Context/UserContext";
import { TUser } from "../../../Shared/Types/common";
import { avatarSchema } from "../Validation/Validation";
import { updateAvatar } from "../Api/ProfileApi";

type TProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AvatarModal = ({isOpen, onClose}: TProps) => {
  const MODAL_TITLE = 'Change user picture';

  const { user, setUser } = useContext(UserContext);

  const {
    register, 
    handleSubmit,
    reset,
    formState: {errors, isDirty}
  } = useForm({
    resolver: yupResolver(avatarSchema),
    mode: 'onSubmit'
  });

  const onSubmit = async (data: TUser) => {
    try {
      const user = await updateAvatar(data as TUser);
      setUser(user);
      onClose();
    }
    catch (error) {
      console.error(error);
    }
  }

  const handleClose = () => {
    reset();
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return(
    <Modal 
      title={MODAL_TITLE}
      isOpen={isOpen}
      onClose={handleClose}
      >
    <form onSubmit={handleSubmit(onSubmit)}>
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
        disabled={!isDirty} 
        />
    </form>
    </Modal>
  )
}

export default AvatarModal;
