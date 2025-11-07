import { NavLink } from 'react-router-dom';
import styles from './NavMenu.module.css';

function NavMenu() {
  return (
    <nav className={styles.nav_menu}>
      <NavLink to="/">Главная</NavLink>
      <NavLink to="posts">Посты</NavLink>
      <NavLink to="users/:id/posts">Посты пользователей</NavLink>
    </nav>
  );
}

export default NavMenu;
