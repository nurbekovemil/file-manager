<template>
    <div class="admin-layout">
      <aside>
        <nav>
          <ul>
            <li><router-link to="/dashboard">Dashboard</router-link></li>
            <li><router-link to="/users">Users</router-link></li>
            <li><router-link to="/settings">Settings</router-link></li>
          </ul>
        </nav>
      </aside>
      <div class="content">
        <header>
          <h1>Admin Panel</h1>
        </header>
        <main>
          <!-- Слот для вставки контента страницы -->
          <slot />
        </main>
      </div>
    </div>
  </template>
  
  <style scoped>
  .admin-layout {
    display: flex;
    min-height: 100vh;
  }
  aside {
    width: 250px;
    background-color: #2c3e50;
    color: white;
    padding: 20px;
  }
  aside nav ul {
    list-style: none;
    padding: 0;
  }
  aside nav ul li {
    margin: 10px 0;
  }
  aside nav ul li a {
    color: white;
    text-decoration: none;
  }
  .content {
    flex-grow: 1;
    padding: 20px;
  }
  header {
    margin-bottom: 20px;
  }
  </style>
  