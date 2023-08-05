import ModalProvider from '../../contexts/modalContext';
import Content from './ingredients/Content';
import Trigger from './ingredients/Trigger';

const Modal = Object.assign(ModalProvider, { Content, Trigger });

export default Modal;
