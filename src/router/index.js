import { createRouter, createWebHistory } from 'vue-router'

import Create from '../components/AddProduct.vue'
import Edit from '../components/EditProduct.vue'
import Index from '../components/ProductList.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index 
  },
  {
    path: '/addProducts',
    name: 'create',
    component: Create
  },
  {
    path: '/editProducts',
    name: 'edit',
    component: Edit
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
