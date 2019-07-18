import  Vue from 'vue'
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
import 'firebase/auth';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import VueGallery from 'vue-gallery';


Vue.component('font-awesome-icon', FontAwesomeIcon) // Register component globally
library.add(fas) // Include needed icons.



Vue.use(firestorePlugin);
Vue.use(Vuetify,{
    iconfont: 'mdi',
    iconfont: 'faSvg',
    iconfont: 'fa'
});
Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(Vuex,axios);
Vue.use(firestorePlugin);
Vue.use(VueGallery);

//

firebase.initializeApp({
    apiKey: 'AIzaSyBP9uJuypDW1ohYqrpVlxc1HKiOaP_U-jU',
    projectId: 'fotokutok-618c4',
    databaseURL: 'https://fotokutok-618c4.firebaseio.com/',
    storageBucket: "fotokutok-618c4.appspot.com",
})

export const db = firebase.firestore();
export const storage = firebase.storage();
export const auth = firebase.auth();
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
