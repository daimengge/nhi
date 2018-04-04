import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import about from './views/about.vue'

// import qxlp from './views/qxlp.vue'
// import ershou from './views/ershou.vue'
 import qxsp from './views/qxsp.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about/:fenlei',
      name: 'about',
      component:about
    },
   
    {
      path: '/qxsp',
      name: 'qxsp',
      component:qxsp
    }
  ]
})
