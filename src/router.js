import Vue from 'vue'
import Router from 'vue-router'

import HomePage from './components/pages/HomePage'
import RegisterPage from './components/pages/RegisterPage'
import LoginPage from './components/pages/LoginPage'
import UserPage from './components/pages/UserPage'

import Store from './store/index';

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: HomePage,
      meta: {
        isPublic: true
      }
    },
    {
      path: '/register',
      name: 'RegisterPage',
      component: RegisterPage,
      meta: {
        isPublic: true
      }
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage,
      meta: {
        isPublic: true
      }
    },
    {
      path: '/user/:user_id',
      name: 'UserPage',
      component: UserPage,
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(page => page.meta.isPublic) || Store.state.token) {
    next()
  } else {
    next('/login')
  }
})

export default router