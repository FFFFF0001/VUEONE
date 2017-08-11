import Vue from 'vue'
import App from './music.vue'
import router from '../../router/music'
import '../../assets/css/main.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
