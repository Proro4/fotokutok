import {
    NEWS_LIST,
    NEWS_DETAIL,
    RESET_NEWS_DETAIL,
    ADD_POST,
} from '../mutation-types.js';
import axios from 'axios';

const state = {
    newsList: null,
    newsDetail: null,
    sendNewBlog: null,
    linkId: null
};

const getters = {
    newsList: state => state.newsList,
    newsDetail: state => state.newsDetail,
    sendNewBlog: state => state.sendNewBlog,
};

const actions = {
    [ADD_POST]: ({commit}, sendNewBlog) => {
        return new Promise((resolve, reject) => {
            axios
                .post('https://fotokutok-618c4.firebaseio.com/news/news-detail' , sendNewBlog)
                .then(response =>{
                    commit(ADD_POST);
                    resolve(response);
                    console.log('then');
                })
                .catch(error => {
                    reject(error)
                    console.log('catch');
                })
                .finally(() =>{
                    console.log('finally');
                })

        })
    },
    [NEWS_LIST]: ({commit}) => {
        return new Promise((resolve, reject) => {
            axios
                .get('https://fotokutok-618c4.firebaseio.com/news/news-detail.json')
                .then((response) => {
                    commit(NEWS_LIST, response.data);
                    resolve();
                })
                .catch((response) => {
                    reject(response);
                })
        })
    },
    [NEWS_DETAIL]: ({commit}, linkId) => {
        return new Promise((resolve, reject) => {
            axios.get(`https://fotokutok-618c4.firebaseio.com/news/news-detail/${linkId}.json`)
                .then((response) =>{
                    commit(NEWS_DETAIL, response.data);
                    resolve();
                    console.log(`https://fotokutok-618c4.firebaseio.com/news/news-detail/${linkId}.json`);
                })
                .catch((response) =>{
                    reject(response);
                })

        })
    }
};

const mutations = {
    [NEWS_LIST](state, status) {
        state.newsList = status;
    },
    [NEWS_DETAIL](state, newsDetail){
        state.newsDetail = newsDetail;
    },
    [RESET_NEWS_DETAIL](state){
        state.newsDetail = null;
    },
    [ADD_POST](state ,status) {
        state.sendNewBlog = status;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
