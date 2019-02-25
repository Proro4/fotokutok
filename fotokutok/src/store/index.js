import Vue from 'vue';
import Vuex from 'vuex';
import modules from './modules';
import carousel from 'vue-owl-carousel'

Vue.use(Vuex);

Vue.component('carousel', carousel);

export default new Vuex.Store({
    modules,
});