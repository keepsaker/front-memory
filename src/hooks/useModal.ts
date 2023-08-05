import { useContext, useCallback } from 'react';
import { ModalContext } from '../contexts/modalContext';

const useModal = () => {
  const context = useContext(ModalContext);

  if (context === null) {
    throw new Error('컴포넌트가 ModalProvider의 자손이 아닙니다.');
  }

  const { isOpen, setIsOpen } = context;

  const show = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);
  const hide = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);
  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, [setIsOpen]);

  return { isOpen, show, hide, toggle };
};

export default useModal;
