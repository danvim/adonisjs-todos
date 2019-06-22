import Vue from 'vue'
import Router from 'vue-router'
import Todos from '../components/layout/Todos'

Vue.use(Router)

export default new Router({
  mode: 'history', // use HTML5 history instead of hashes
  routes: [
    // all routes
    {
      path: '/',
      component: Todos
    }
  ]
})
