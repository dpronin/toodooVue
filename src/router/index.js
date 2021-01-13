import Vue from 'vue'
import VueRouter from 'vue-router'
import Todos from '../views/Todos.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Todos',
    component: Todos,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
  },
  {
    path: '/add',
    name: 'Add',
    component: () => import(/* webpackChunkName: "about" */ '../views/TodoAdd.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/archived',
    name: 'Archived',
    component: () => import(/* webpackChunkName: "about" */ '../views/Archived.vue'),
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  console.log(to)
  console.log(from)
  console.log(next)
  if (requiresAuth && !store.getters.user) {
    next('/login')
  } else {
    next()
  }
})

export default router
