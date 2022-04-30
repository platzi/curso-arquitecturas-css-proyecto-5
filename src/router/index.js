import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/shuffle',
    name: 'shuffle',
    component: () => import(/* webpackChunkName: "shuffle" */ '../views/Shuffle.vue')
  },
  {
    path: '/workout',
    name: 'workout',
    component: () => import(/* webpackChunkName: "workout" */ '../views/Workout.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
