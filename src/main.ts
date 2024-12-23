import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import routes from './router/routes';

import './assets/styles.css'; // Подключение глобальных стилей

const app = createApp(App);

// Настройка маршрутов
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Подключение Pinia
app.use(createPinia());
app.use(router);

app.mount('#app');
