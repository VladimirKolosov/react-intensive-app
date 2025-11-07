import Header from '../../widgets/LayoutHader/Header';
import NavMenu from '../ui/NavMenu/NavMenu';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <>
      <NavMenu />
      <Header />
      <Outlet />
    </>
  );
}

export default MainLayout;
