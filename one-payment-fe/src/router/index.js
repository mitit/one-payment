import Vue from 'vue'
import Router from 'vue-router'
import AccountInfo from '@/components/AccountInfo'
import CreatePayment from '@/components/CreatePayment'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/account',
      name: 'AccountInfo',
      component: AccountInfo
    },

    {
      path: '/create-payment',
      name: 'CreatePayment',
      component: CreatePayment
    }
  ]
})
