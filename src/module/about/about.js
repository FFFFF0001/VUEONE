import Vue from 'vue'
import App from './about.vue'
import router from '../../router/about'
import '../../assets/css/main.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
