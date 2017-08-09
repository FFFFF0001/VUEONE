import Vue from 'vue'
import Router from 'vue-router'
import One from '../components/one/home.vue'
import ReadDetail from '../components/one/details/readDetail.vue'
import QuestionDetail from '../components/one/details/questionDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: One
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
