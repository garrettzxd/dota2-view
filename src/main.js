import Vue from 'vue'
import App from './App'
import router from './router'
import MyPlugin from './plugin/plugin'

Vue.config.productionTip = false
Vue.use(MyPlugin)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
