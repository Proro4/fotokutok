import Vue from 'vue';
import Router from 'vue-router';
import Home from './modules/home/index.vue'
import NewsPage from './components/news-page/index.vue'

// const ifAuthenticated = (to, from, next) => {
//     if (store.state.auth.isAuthentificated) {
//         next();
//         return
//     }
//     next('/')
// };
Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes:[
        {
            name:'home',
            path:'/',
            component:Home
        },
        {
            name:'news-page',
            path:'/news-page',
            component: NewsPage
        }
    ]
});