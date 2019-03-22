
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import About from '../components/About.vue'
const routes = [
    { path: '/about', component: About },

  ]

  const router = new VueRouter({
    routes, // short for `routes: routes`
    hashbang :false,
    mode:'history'
  })


  export default router