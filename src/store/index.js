import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  showLoading: true
}
const mutations = {
  toggleLoading( state ){
    state.showLoading = !state.showLoading
  }
}
const actions = {
  toggleLoading ({ commit }){
    commit( 'toggleLoading' )
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
  }
})
