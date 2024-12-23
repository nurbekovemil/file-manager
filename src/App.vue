<template>
  <div id="app">
    <!-- Навигация, если нужно -->
    <header>
      <h1>File Manager App</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/file-manager">File Manager</router-link>
      </nav>
    </header>

    <!-- Основной контент -->
    <main>
      <router-view /> <!-- Здесь будет отображаться контент для каждого маршрута -->
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style scoped>
/* Глобальные стили можно добавить сюда */

#app {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f8f9fa;
}

header {
  background-color: #343a40;
  color: white;
  padding: 10px;
  text-align: center;
}

nav {
  margin-top: 10px;
}

nav a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
}

nav a:hover {
  text-decoration: underline;
}

main {
  padding: 20px;
}
</style>
