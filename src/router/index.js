import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView';
import EntrarView from '../views/EntrarView.vue'
import EditarView from '../views/EditarView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginView
  },

  {
    path: '/Sign',
    name: 'SignView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SignView.vue')
  },
  {
    path: '/entrar',
    name: 'entrar',
    component: EntrarView
  },
  {
    path: '/Editar',
    name: 'Editar',
    component: EditarView
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
