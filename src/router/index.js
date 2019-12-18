import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    meta: {
      showTab: true
    },
    component: r => require.ensure([], () => r(require('@/views/Home')), 'index') 
  },
  {
    path: '/cate',
    name: 'cate',
    meta: {
      showTab: true
    },
    component: r => require.ensure([], () => r(require('@/views/Cate')), 'index') 
  },
  {
    path: '/cart',
    name: 'cart',
    meta: {
      showTab: true
    },
    component: r => require.ensure([], () => r(require('@/views/Cart')), 'index') 
  },
  {
    path: '/mine',
    name: 'mine',
    meta: {
      showTab: true
    },
    component: r => require.ensure([], () => r(require('@/views/Mine')), 'index') 
  },
  {
    path: '/',
    redirect: '/home'
  }
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
