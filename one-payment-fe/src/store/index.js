import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth
  },

  plugins: [createPersistedState({
    key: 'auth',
    paths: ['auth'],
    storage: {
      getItem: key => Cookies.get(key),
      setItem: (key, value) =>
        Cookies.set(key, value, {expires: 3}),
      removeItem: key => Cookies.remove(key)
    }
  })]
})
