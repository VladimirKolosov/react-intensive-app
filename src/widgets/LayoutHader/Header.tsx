import { useState } from 'react';
import Modal from '../../shared/ui/Modal/Modal';
import ThemeSwitcher from '../../features/ui/ThemeSwitcher/ThemeSwitcher';
import Button from '../../shared/ui/Button/Button';
import styles from './Header.module.css';
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <Button title="Показать информацию о проекте" onClick={openModal}>
        Модальное окно
      </Button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <Modal.Header>
          <h2>Информация о проекте</h2>
        </Modal.Header>
        <Modal.Body>
          <p>
            Приложение для просмотра постов и комментариев, основанное на
            публичном API JSONPlaceholder
          </p>
        </Modal.Body>
        <Modal.Footer>Закрыть</Modal.Footer>
      </Modal>
      <ThemeSwitcher />
    </header>
  );
}

export default Header;
