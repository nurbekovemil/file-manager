import FileManagerView from '@/views/FileManagerView.vue';
import HomeView from '@/views/HomeView.vue';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect: undefined, // or some other default value
  },
  {
    path: '/file-manager',
    name: 'file-manager',
    component: FileManagerView,
    redirect: undefined, // or some other default value
  },
];
export default routes;