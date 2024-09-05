import { createBrowserRouter } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { MainPage } from '../pages/MainPage/MainPage';
import { ProfilePage } from '../pages/ProfilePage/ProfilePage';
import { RegistrationPage } from '../pages/RegistrationPage/RegistrationPage';
import PostPage from '../pages/PostPage/Postpage';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/main",
    element: <MainPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/registration",
    element: <RegistrationPage />,
  },
  {
    path: "/post/:id",
    element: <PostPage />,
    // /post/:id - эта запись гласит, что мы  переходим на страницу с 
    // динамическим id (в link передается id конкретного поста)
  },
]);
