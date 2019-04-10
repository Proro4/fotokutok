import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router';
import store from './store';
import axios from 'axios';
import carousel from 'vue-owl-carousel'

Vue.config.productionTip = false

Vue.use(Vuex);
Vue.use(Vuex,axios);

Vue.component('carousel', carousel);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
