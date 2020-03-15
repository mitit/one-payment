import Vue from 'vue'
import Router from 'vue-router'
import AccountInfo from '@/components/AccountInfo'
import CreatePayment from '@/components/CreatePayment'
import GeneratedQr from '@/components/GeneratedQr'

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
    },

    {
      path: '/created-payment',
      name: 'GeneratedQr',
      component: GeneratedQr
    }
  ]
})
