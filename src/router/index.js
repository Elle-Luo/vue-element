import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Login = () => import('../views/login/Login')
const Home = () => import('../views/home/Home')
const HomeIndex = () => import('../views/home/index')
const Stats = () => import('../views/home/stats')

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/index',
        name: 'index',
        component: HomeIndex
      },
      {
        path: '/stats',
        name: 'stats',
        component: Stats
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router