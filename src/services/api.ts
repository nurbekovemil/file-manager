import axios from 'axios';

// Создаем экземпляр axios
const api = axios.create({
  baseURL: 'http://localhost:3000', // Замените на ваш базовый URL
});

export default api;
