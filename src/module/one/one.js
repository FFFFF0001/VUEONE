import Vue from 'vue'
import App from './one.vue'
import router from '../../router/one'
import '../../assets/css/main.css'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
