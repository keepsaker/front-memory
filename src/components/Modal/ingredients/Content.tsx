import { createPortal } from 'react-dom';
import useModal from '../../../hooks/useModal';
import { backdrop, content } from './Content.css';

const Content = (props: React.PropsWithChildren) => {
  const { children } = props;
  const { isOpen, hide } = useModal();

  const modalRoot = document.getElementById('modal-root');

  return (
    isOpen &&
    createPortal(
      <>
        <div onClick={hide} className={backdrop} />
        <section className={content}>{children}</section>
      </>,
      modalRoot
    )
  );
};

export default Content;
