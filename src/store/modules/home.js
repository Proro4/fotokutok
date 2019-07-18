import {
    NEWS_LIST,
    NEWS_LIST_LIMIT,
    NEWS_DETAIL,
    NEWS_DETAIL_EDIT,
    NEWS_PAGE_LIST,
    RESET_NEWS_DETAIL,
    ADD_POST,
    LINK_FOR_ID,
    POP_UP_SUC,
    ALL_IMG,
    BLOG_DETAIL,
    BLOG_DETAIL_LIST,
    BLOG_EDIT_ID,
    DEL_BLOG,
    DEL_POPUP,
    DEL_ID,

} from '../mutation-types.js';
import { storage } from '@/main';

import axios from 'axios';

const state = {
    newsList: [],
    newsDetailList: [],
    newsListLimit: [0,4],
    newsListMax: null,
    newsDetail: null,
    sendNewBlog: null,
    linkForId: null,
    popUpSuc: false,
    allImg: null,
    storage: null,
    allList: null,
    sliderList: null,
    deletePopup: false,
    delId: null,
    deleteBlog: {
        title: 'Удалить блог №',
        text: 'Вы точно хотите удалть блог ?',
        button:'Удалить',
    },
};

const getters = {
    newsList: state => state.newsList,
    newsListLimit: state => state.newsListLimit,
    newsDetailList: state => state.newsDetailList,
    newsListMax: state => state.newsListMax,
    newsDetail: state => state.newsDetail,
    sendNewBlog: state => state.sendNewBlog,
    linkForId: state => state.linkForId,
    popUpSuc: state => state.popUpSuc,
    allImg: state => state.allImg,
    storage: state => state.storage,
    allList: state => state.allList,
    sliderList: state => state.sliderList,
    deleteBlog: state => state.deleteBlog,
    deletePopup: state => state.deletePopup,
    delId: state => state.delId,
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
    [NEWS_DETAIL_EDIT]: ({commit}, linkForId) => {
        return new Promise((resolve, reject) => {
            axios
             .get('https://fotokutok-618c4.firebaseio.com/news/news-detail/'+linkForId+'.json')
                .then((response) =>{
                    commit(NEWS_DETAIL_EDIT, response.data);
                    resolve();

                })
                .catch((response) =>{
                    reject(response);
                })
        })
    },
    [BLOG_DETAIL_LIST]: ({commit}) => {
        return new Promise((resolve, reject) => {
            axios
                .get('https://fotokutok-618c4.firebaseio.com/news/news-detail.json')
                .then((response) => {
                    commit(BLOG_DETAIL_LIST, response.data);
                    resolve();
                })
                .catch((response) => {
                    reject(response);
                })
        })
    },
};

const mutations = {
    [DEL_ID](state, id){
      state.delId = id;
    },
    [DEL_POPUP](state, bool){
        state.deletePopup = bool;
    },
    [NEWS_LIST](state, status) {
        state.allList = status;
        state.newsList = [];
        let start = state.newsListLimit[0];
        let limit = state.newsListLimit[1];
        let key;
        for(key in status){
            state.newsList.push(status[key])
        }
        let colList = state.newsList.length-1;
        let numbId = -1;
        state.newsList.forEach((item)=>{
            ++numbId;
           return item.id =numbId;
        })
        console.log(state.newsList);
        state.newsList = state.newsList.reverse();
        state.newsListMax = state.newsList.length;
        state.newsList = state.newsList.slice(start, limit);
        state.sliderList = state.newsList.slice(0, 2);
    },
    [BLOG_DETAIL_LIST](state, status){
        state.newsList = [];
        let key;
        for(key in status){
            state.newsList.push(status[key])
        }
        state.newsDetail = state.newsList[state.linkForId];
    },
    [BLOG_DETAIL](state,id){
        state.linkForId = id;
    },
    [NEWS_LIST_LIMIT](state, status) {
        state.newsListLimit = status;
    },
    [ALL_IMG](state, status){
        state.allImg = status;
    },
    [NEWS_PAGE_LIST](state, status){
        state.newsList = [];
        let key;
        for(key in status){
            state.newsList.push(status[key])
        }
    },
    [RESET_NEWS_DETAIL](state){
        state.newsList = state.newsList.reverse();
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
    },
    [NEWS_DETAIL_EDIT](state, status) {
        state.newsDetailList = status;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
