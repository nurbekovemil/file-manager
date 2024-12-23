import api from './api'; // Импортируем общий экземпляр axios

// Функция для входа
export const login = async (email: string, password: string) => {
  try {
    const response = await api.post('/login', {
      email,
      password,
    });
    // Сохранение JWT в локальное хранилище
    localStorage.setItem('token', response.data.token);
    return response.data;
  } catch (error) {
    console.error('Ошибка авторизации:', error);
    throw new Error('Ошибка авторизации');
  }
};
