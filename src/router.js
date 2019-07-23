import Vue from 'vue';
import Router from 'vue-router';
import Home from './modules/home/index.vue'
import About from './modules/about/index.vue'
import NewsPage from './components/news-page/index.vue'
import adminTab from './modules/admin-tab/index.vue'
import adminBlogs from './modules/admin-tab/components/blogs/index.vue'
import addBlog from './modules/admin-tab/components/add-blog/index.vue'
import editBlog from './modules/admin-tab/components/edit-blog/index.vue'
import options from './modules/admin-tab/components/options/index.vue'
import adminAbout from './modules/admin-tab/components/about/index.vue'
import Auth from './modules/auth/index.vue'

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
            name:'about',
            path:'/about',
            component:About
        },
        {
            name:'admin-tab',
            path:'/admin-tab',
            component:adminTab
        },
        {
          name:'admin-blogs',
          path:'/admin-tab/blog',
          component:adminBlogs
        },
        {
            name:'news-page',
            path:'/news-page/:id',
            component: NewsPage
        },
        {
            name:'add-blog',
            path: '/admin-tab/add-blog',
            component: addBlog
        },
        {
            name:'edit-blog',
            path: '/admin-tab/edit-blog/:id',
            component: editBlog
        },
        {
            name:'auth',
            path: '/auth',
            component: Auth
        },
        {
            name: 'options',
            path: '/admin-tab/options',
            component: options
        },
        {
            name: 'adminAbout',
            path: '/admin-tab/about',
            component: adminAbout
        }
    ]
});