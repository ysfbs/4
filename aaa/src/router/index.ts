import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '@/views/EventListView.vue'
import AboutView from '@/views/AboutView.vue'
import EventDetailView from '@/views/EventDetailView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list-view',
      component: EventListView
    },
    {
            
            path: '/event/:id',
            name: 'event-detail-view',
            
            component: EventDetailView,
      props: true
          },
    {
      path: '/about',
      name: 'about',
      component: AboutView 
    },
  ],
}) 

export default router
