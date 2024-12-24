import AdminLayout from '@/layouts/AdminLayout.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
import FileManagerView from '@/views/FileManagerView.vue';
import { createRouter, createWebHistory, type RouteLocationNormalized, type NavigationGuardNext } from 'vue-router';
import { useAuthStore } from '@/store/authStore';
import AuthView from '@/views/AuthView.vue';


const routes = [
  {
    path: '',
    component: AuthLayout,
    children: [
      {
        path: '',
        name: 'Auth',
        component: AuthView,
      },
    ],
  },
  {
    path: '/dashboard',
    component: AdminLayout,
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: FileManagerView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((
    to: RouteLocationNormalized, 
    from: RouteLocationNormalized, 
    next: NavigationGuardNext
  ) => {
  const authStore = useAuthStore();

  if (to.path.startsWith('/dashboard') && !authStore.isAuth) {
    next('/login'); // Перенаправление на страницу авторизации
  } else {
    next();
  }
});

export default router;
