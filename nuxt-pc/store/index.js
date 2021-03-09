import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import dialogs from './modules/dialogs'

import getters from './getters'

Vue.use(Vuex)


const store = () => {  
  return new Vuex.Store({
    modules: {
      user,
      dialogs
    },
    getters
  })
}
export default store
