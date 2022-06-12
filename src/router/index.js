import { createRouter, createWebHistory } from 'vue-router'
import DesignSystem from '../views/DesignSystem.vue'
import Home from '../views/Home.vue'
import Destination from '../views/Destination.vue'
import Technology from '../views/Technology.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/design',
    name: 'designSystem',
    component: DesignSystem
  },
  {
    path: '/crew',
    name: 'crew',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Crew.vue')
  },
  {
    path: '/destination',
    name: 'destination',
    component: Destination
  },
  {
    path: '/technology',
    name: 'technology',
    component: Technology
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
