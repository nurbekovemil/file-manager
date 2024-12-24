<template>
  <div id="app">
    <!-- Основной контент -->
      <router-view /> <!-- Здесь будет отображаться контент для каждого маршрута -->
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
