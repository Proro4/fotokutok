import {
    NEWS_LIST,
    NEWS_DETAIL,
    RESET_NEWS_DETAIL,
    ADD_POST,
    LINK_FOR_ID,
    POP_UP_SUC,
    ALL_IMG,

} from '../mutation-types.js';
import { storage } from '@/main';

import axios from 'axios';

const state = {
    newsList: null,
    newsDetail: null,
    sendNewBlog: null,
    linkForId: null,
    popUpSuc: false,
    allImg: null,
    storage: null
};

const getters = {
    newsList: state => state.newsList,
    newsDetail: state => state.newsDetail,
    sendNewBlog: state => state.sendNewBlog,
    linkForId: state => state.linkForId,
    popUpSuc: state => state.popUpSuc,
    allImg: state => state.allImg,
    storage: state => state.storage,
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
    [ALL_IMG]: ({commit}) => {
        return new Promise((resolve, reject) => {
            axios
                .get('https://fotokutok-618c4.firebaseio.com/imgLinks.json')
                .then((response) => {
                    commit(ALL_IMG, response.data);
                    resolve();
                })
                .catch((response) => {
                    reject(response);
                })
        })
    },
    [NEWS_DETAIL]: ({commit}, linkForId) => {
        return new Promise((resolve, reject) => {
            axios.get(`https://fotokutok-618c4.firebaseio.com/news/news-detail/${linkForId}.json`)
                .then((response) =>{
                    commit(NEWS_DETAIL, response.data);
                    resolve();
                    console.log(`https://fotokutok-618c4.firebaseio.com/news/news-detail/${linkForId}.json`);

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
        let storageRef = storage.ref();
    },
    [ALL_IMG](state, status){
        state.allImg = status;
    },
    [NEWS_DETAIL](state, newsDetail){
        state.newsDetail = newsDetail;
    },
    [RESET_NEWS_DETAIL](state){
        state.newsDetail = null;
    },
    [ADD_POST](state, status){
        state.sendNewBlog = status;
    },
    [LINK_FOR_ID](state, status){
        state.linkForId = status;
    },
    [POP_UP_SUC](state, status){
        state.popUpSuc = status;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
