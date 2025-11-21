import { createContext, useContext, type PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import Button from '../Button/Button';
import styles from './Modal.module.css';

type ModalContexType = {
  onClose: () => void;
};
interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
}

const container = document.getElementById('modal-root');
const ModalContex = createContext<ModalContexType>();
function Modal({ children, isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;
  if (!container) {
    return null;
  }
  return createPortal(
    <ModalContex.Provider value={{ onClose }}>
      <div className={styles.modal_wrapper} onClick={onClose}>
        <div className={styles.modal}>{children}</div>
      </div>
    </ModalContex.Provider>,
    container
  );
}

Modal.Header = function Header({ children }: PropsWithChildren) {
  return <div className={styles.modal_title}>{children}</div>;
};

Modal.Body = function Body({ children }: PropsWithChildren) {
  return <div className={styles.modal_content}>{children}</div>;
};

Modal.Footer = function Footer({ children }: PropsWithChildren) {
  const { onClose } = useContext(ModalContex);
  return (
    <Button title="Закрыть модальное окно" onClick={onClose}>
      {children}
    </Button>
  );
};
export default Modal;
