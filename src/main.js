import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router';
import store from './store';
import axios from 'axios';
import carousel from 'vue-owl-carousel';
import { firestorePlugin } from 'vuefire';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'

Vue.use(firestorePlugin);
Vue.use(Vuetify);
Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(Vuex,axios);
Vue.use(firestorePlugin);
//

firebase.initializeApp({
    apiKey: 'AIzaSyBP9uJuypDW1ohYqrpVlxc1HKiOaP_U-jU',
    projectId: 'fotokutok-618c4',
    databaseURL: 'https://fotokutok-618c4.firebaseio.com/',
    storageBucket: "fotokutok-618c4.appspot.com",
})

export const db = firebase.firestore();
export const storage = firebase.storage();
// const storageRef = storage.ref();
// const storageRefLink = storageRef.child('img-1.jpg')
// storageRef.child('img-1.jpg').getDownloadURL().then(function(url) {
//     console.log(url)
// })
Vue.component('carousel', carousel);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
