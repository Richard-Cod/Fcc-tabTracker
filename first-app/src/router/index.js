import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import Songs from '../components/Songs.vue'
import ViewSong from '../components/ViewSong.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/inscription',
    name: 'Register',
    component: Register
  },
  {
    path: '/connexion',
    name: 'Login',
    component: Login
  },
  {
    path: '/songs',
    name: 'Songs',
    component: Songs
  },
  {
    path: '/songs/:songId',
    name: 'ViewSong',
    component: ViewSong
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
