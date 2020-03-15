import authApi from '@/api/auth';
import constants from '@/constants';
import router from '@/router';

const state = {
  authenticated: false,
  token: '',
  role: {
    code: '',
    name: ''
  },
  userEmail: ''
};

const emptyState = JSON.parse(JSON.stringify(Object.assign({}, state)));

const mutations = {
  auth(state, data) {
    let token = data.headers['auth-token'];
    if (!token)
      return;

    state.authenticated = true;
    state.token = token;
    state.role.code = data.data.role.code;
    state.role.name = data.data.role.name;
    state.userEmail = data.data.email;

    sessionStorage.setItem(constants.STORAGE_AUTHENTICATED, true);
    sessionStorage.setItem(constants.STORAGE_TOKEN, token);
    sessionStorage.setItem(constants.STORAGE_ROLE_CODE, state.role.code);
  },

  logout(state) {
    Object.assign(state, JSON.parse(JSON.stringify(emptyState)));

    sessionStorage.removeItem(constants.STORAGE_AUTHENTICATED);
    sessionStorage.removeItem(constants.STORAGE_TOKEN);
    sessionStorage.removeItem(constants.STORAGE_ROLE_CODE);
    sessionStorage.removeItem(constants.STORAGE_REDIRECT);

    router.push('/');
  }
};

const actions = {
  auth(context, payload) {
    return authApi
      .login(payload.email, payload.password)
      .then(data => {
        if (data.data.role.code === constants.ADMIN_ROLE_CODE)
          context.commit('auth', data);
        else
          throw 'Веб-страница доступна только администраторам'
      });
  },

  logout(context) {
    authApi
      .logout()
      .then(() => {
        context.commit('logout');
      });
  }
};

const getters = {
  authenticated: state => {
    if (!state.authenticated) {
      let authenticated = sessionStorage.getItem(constants.STORAGE_AUTHENTICATED);
      if (authenticated)
        state.authenticated = !!authenticated;
    }

    return state.authenticated;
  },

  token: state => {
    if (!state.token) {
      let token = sessionStorage.getItem(constants.STORAGE_TOKEN);
      if (token)
        state.token = token;
    }

    return state.token;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
