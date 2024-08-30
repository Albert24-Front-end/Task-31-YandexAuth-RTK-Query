// src/components/AuthCallback.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const accessToken = params.get('access_token');

    if (accessToken) {
      // Сохраните токен в локальное хранилище
      localStorage.setItem('yandex_access_token', accessToken);
      // Перенаправьте пользователя на главную страницу или куда нужно
      navigate('/main');
    }
  }, [navigate]);

  return <div>Авторизация...</div>;
};

export default AuthCallback;
