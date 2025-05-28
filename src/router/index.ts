import { createRouter, createWebHistory } from 'vue-router';
import TasksView from '@/views/TasksView.vue';
import AddTaskView from '@/views/AddTaskView.vue';
import EditTaskView from '@/views/EditTaskView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TasksView,
    },
    {
      path: '/add',
      name: 'add',
      component: AddTaskView,
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: EditTaskView,
    }
  ],
})

export default router;
