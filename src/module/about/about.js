import Vue from 'vue'
import App from './about.vue'
import router from '../../router/about'
import '../../assets/css/main.css'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
