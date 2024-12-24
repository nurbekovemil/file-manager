import { defineStore } from 'pinia';
import { login } from '../services/authService';

interface AuthState {
  isAuth: boolean;
  user: object | null;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    isAuth: false,
    user: null,
  }),

  actions: {
    async loginUser(email: string, password: string) {
      try {
        const response = await login(email, password);
        this.isAuth = true
        localStorage.setItem('token', response.token); // Сохранение токена
        this.user = response.user; // Сохранение информации о пользователе
      } catch (error) {
        this.isAuth = false
        console.error('Ошибка авторизации:', error);
        throw error;
      }
    },
  },
});
