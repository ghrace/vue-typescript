import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    changeState(state, params) {
      state.count += params;
    },
    clearState(state) {
      state.count = 0;
    },
    reduceState(state, params) {
      state.count -= params;
      state.count = state.count < 0 ? 0 : state.count;
    },
  },
  actions: {

  },
});
