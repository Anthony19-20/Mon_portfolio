import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProjectView from '@/views/ProjectView.vue'
import ContactView from '@/views/ContactView.vue'
import CV_LetterView from '@/views/CV_LetterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/CV_Letter',
      name: 'CV_Letter',
      component: CV_LetterView,
    },
  ],
})

export default router
