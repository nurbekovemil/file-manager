import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import routes from './router';

import './assets/index.css'; // Подключение глобальных стилей

const app = createApp(App);

// Подключение Pinia
app.use(createPinia());
app.use(routes);

app.mount('#app');
