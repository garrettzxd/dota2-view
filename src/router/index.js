import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'index',
      component: reslove => require(['../pages/Index'], reslove),
      children: [{
          path: '/heroDetail',
          name: 'heroDetail',
          component: reslove => require(['../pages/HeroDetail'], reslove)
      },{
          path: '/eqDetail',
          name: 'eqDetail',
          component: reslove => require(['../pages/EquipmentDetail'], reslove)
      }]
  },{
      path: '*',
      redirect: '/'
  }]
})
