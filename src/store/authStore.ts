import { defineStore } from 'pinia';
import { login } from '../services/authService';

interface AuthState {
  token: string | null;
  user: object | null;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    token: localStorage.getItem('token') || null,
    user: null,
  }),

  actions: {
    async loginUser(email: string, password: string) {
      try {
        const response = await login(email, password);
        this.token = response.token;
        localStorage.setItem('token', response.token); // Сохранение токена
        this.user = response.user; // Сохранение информации о пользователе
      } catch (error) {
        console.error('Ошибка авторизации:', error);
        throw error;
      }
    },
  },
});
