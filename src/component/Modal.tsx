import { createContext, useContext, ReactNode } from 'react';
import {
  dimmed,
  modal,
  modalBody,
  modalFooter,
  modalHeader,
  openedModal,
} from './Modal.css';

type ModalContextType = {
  isOpened: boolean;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextType>({
  isOpened: false,
  closeModal: () => {},
});

const Modal = ({ children, closeModal, isOpened }) => {
  return (
    <ModalContext.Provider value={{ closeModal, isOpened }}>
      <div className={isOpened ? openedModal : modal}>
        <div style={{ margin: 'auto 10px' }}>{children}</div>
      </div>
    </ModalContext.Provider>
  );
};

type ModalComponentProps = {
  children: ReactNode;
};

Modal.Dimmed = () => {
  const { closeModal } = useContext(ModalContext);
  return <div className={dimmed} onClick={closeModal}></div>;
};

Modal.Header = ({ children }: ModalComponentProps) => {
  const { closeModal } = useContext(ModalContext);
  return (
    <div className={modalHeader}>
      {children}
      <button onClick={closeModal}>X</button>
    </div>
  );
};

Modal.Body = ({ children }: ModalComponentProps) => {
  return <div className={modalBody}>{children}</div>;
};

Modal.Footer = ({ children }: ModalComponentProps) => {
  const { closeModal } = useContext(ModalContext);
  return (
    <div className={modalFooter}>
      {children}
      <button onClick={closeModal}>Close</button>
    </div>
  );
};

export default Modal;
