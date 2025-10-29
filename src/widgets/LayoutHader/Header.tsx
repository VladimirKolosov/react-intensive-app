import { useState } from 'react';
import ThemeSwitcher from '../../features/ui/ThemeSwitcher';
import Button from '../../shared/ui/Button/Button';
import styles from './Header.module.css';
import Modal from '../../shared/ui/Modal/Modal';
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
        <p>
          Приложение для просмотра постов и комментариев, основанное на
          публичном API JSONPlaceholder.
        </p>
      </Modal>
      <ThemeSwitcher />
    </header>
  );
}

export default Header;
