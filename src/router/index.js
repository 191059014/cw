import Vue from 'vue'
import Router from 'vue-router'
import User from '@/view/User'
import Role from '@/view/Role'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/role',
      name: 'Role',
      component: Role
    }
  ]
})
