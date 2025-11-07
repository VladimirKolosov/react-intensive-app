import { createBrowserRouter } from 'react-router-dom';
import { Posts, SinglePost, UserPosts } from '../../../pages/Posts';
import MainLayout from '../../../shared/layouts/MainLayout';
import UserTodos from '../../../pages/UserTodos/UserTodos';
import UserAlbums from '../../../pages/UserAlbums/UserAlbums';
import AlbumsPhotos from '../../../pages/AlbumsPhotos/AlbumsPhotos';
import PageNotFound from '../../../pages/PageNotFound/PageNotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      //   { index: true, element: <Posts /> },
      { path: 'posts', element: <Posts /> },
      { path: 'posts/:id', element: <SinglePost /> },
      { path: 'users/:id/posts', element: <UserPosts /> },
      { path: 'users/:id/todos', element: <UserTodos /> },
      { path: 'users/:id/albums', element: <UserAlbums /> },
      { path: 'albums/:id/albums', element: <AlbumsPhotos /> },
      { path: '*', element: <PageNotFound /> },
    ],
  },
]);

export default router;
