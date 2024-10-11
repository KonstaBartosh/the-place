import styles from './Modal.module.css';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { useModalClose } from '.';
import { AuthContext } from '../../../entities/user';


type TProps = {
  isOpen: boolean;
  children?: React.ReactNode;
  title?: string;
  onClose: () => void;
};

const Modal = ({ isOpen, title, children, onClose }: TProps) => {
  const { handleOverlayClose } = useModalClose({ isOpen, onClose });
  const { isLoggedin } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedin && isOpen) {
      toast('Please login');
      navigate('/login');
    }
  }, [isOpen, isLoggedin, navigate]);

  if (!isOpen) return null;

  return (
    <div
      className={styles.overlay}
      onClick={handleOverlayClose}
    >
      <div className={styles.container}>
        <button
          className={styles.buttonClose}
          onClick={onClose}
        />
        <h3 className={styles.title}>{title}</h3>
        {children}
      </div>
    </div>
  );
};

export default Modal;
