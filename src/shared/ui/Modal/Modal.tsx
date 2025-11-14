import { createContext, useContext } from 'react';
import { createPortal } from 'react-dom';
import Button from '../Button/Button';
import styles from './Modal.module.css';

const container = document.getElementById('modal-root');
const ModalContex = createContext();

function Modal({ children, isOpen, onClose }) {
  if (!isOpen) return null;
  return createPortal(
    <ModalContex.Provider value={{ onClose }}>
      <div className={styles.modal_wrapper} onClick={onClose}>
        <div className={styles.modal}>{children}</div>
      </div>
    </ModalContex.Provider>,
    container
  );
}

Modal.Header = function Header({ children }) {
  return <div className={styles.modal_title}>{children}</div>;
};

Modal.Body = function Body({ children }) {
  return <div className={styles.modal_content}>{children}</div>;
};

Modal.Footer = function Footer({ children }) {
  const { onClose } = useContext(ModalContex);
  return (
    <Button title="Закрыть модальное окно" onClick={onClose}>
      {children}
    </Button>
  );
};
export default Modal;
