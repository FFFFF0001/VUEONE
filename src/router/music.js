import Vue from 'vue'
import Router from 'vue-router'
import Music from '../components/music/music.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'music',
      component: Music
    }
  ]
})
