import Vue from 'vue'
import router from './router'
import App from '@/components/layout/App'

Vue.config.productionTip = false

const app = new Vue({
  router,
  components: { App },
  template: '<App/>'
})
app.$mount('#app')
