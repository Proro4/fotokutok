import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router';
import store from './store';
import axios from 'axios';
import carousel from 'vue-owl-carousel';
import VueFire from 'vuefire';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.config.productionTip = false

Vue.use(Vuex);
Vue.use(Vuex,axios);
// Vue.use(VueFire);

firebase.initializeApp({
    projectId: 'fotokutok-618c4',
    databaseURL: 'https://fotokutok-618c4.firebaseio.com/'
})

export const db = firebase.firestore();

Vue.component('carousel', carousel);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
