import Vue from 'vue'
import Router from 'vue-router'
import One from '../components/one/home.vue'
import Music from '../components/one/music.vue'
import About from '../components/one/about.vue'
import ReadDetail from '../components/one/details/read/readDetail.vue'
import QuestionDetail from '../components/one/details/read/questionDetail.vue'

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
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/readDetail',
      name: 'readDetail',
      component: ReadDetail
    },
    {
      path: '/questionDetail',
      name: 'questionDetail',
      component: QuestionDetail
    }
  ]
})
