import Modal from '../Modal';
import NewMemoryForm from '../NewMemoryForm';
import { circle, wrapper } from './NewMemoryModalButton.css';

const NewMemoryModalButton = () => (
  <Modal>
    <Modal.Trigger type="open" className={circle} aria-label="새로운 추억 새기기">
      +
    </Modal.Trigger>
    <Modal.Content>
      <div className={wrapper}>
        <NewMemoryForm />
      </div>
    </Modal.Content>
  </Modal>
);

export default NewMemoryModalButton;
