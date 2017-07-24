import Vue from 'vue'
import Router from 'vue-router'
import One from '../components/one/home.vue'
import Music from '../components/one/music.vue'
import Movie from '../components/one/movie.vue'
import Download from '../components/one/download.vue'
import About from '../components/one/about.vue'
import ReadDetail from '../components/one/details/read/detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: One
    },
    {
      path: '/music',
      name: 'music',
      component: Music
    },
    {
      path: '/movie',
      name: 'movie',
      component: Movie
    },
    {
      path: '/download',
      name: 'download',
      component: Download
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/readDetail',
      name: 'readDetail',
      component: ReadDetail
    }
  ]
})
