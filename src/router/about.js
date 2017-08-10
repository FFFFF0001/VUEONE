import Vue from 'vue'
import Router from 'vue-router'
import About from '../components/about/about.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'about',
      component: About
    }
  ]
})
