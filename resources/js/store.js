window.Vue = require('vue');
window.Vuex = require('vuex');

Vue.use( Vuex );

import user from './modules/user'

const store = new Vuex.Store({
  modules: {
    user
  }
})
export default store
