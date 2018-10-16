import Vue from 'vue'
import Router from 'vue-router'
import skeRoute from './skeleton-route'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/index',
      name: 'index',
      component: reslove => require(['../pages/Index'], reslove),
      children: [{
          path: 'heroList',
          name: 'heroList',
          component: reslove => require(['../pages/HeroList'], reslove)
      }]
  },{
      path: '*',
      redirect: {name: 'heroList'}
  },
  skeRoute]
})
