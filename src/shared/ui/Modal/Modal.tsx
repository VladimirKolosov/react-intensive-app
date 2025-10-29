import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

const container = document.getElementById('modal-root');

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return createPortal(
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modal_content}>
        <button className={styles.close} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>,
    container
  );
}

export default Modal;
