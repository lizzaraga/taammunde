import Vue from 'vue'
import Vuex from 'vuex'
import {IRootState} from './types/IRootState'
import {AuthModule} from './modules'


Vue.use(Vuex)

export default new Vuex.Store<IRootState>({
  state: {
    appName: "Taammunde"
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth: AuthModule
  }
})
