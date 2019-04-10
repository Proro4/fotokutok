import {
    NEWS_LIST,
    NEWS_DETAIL,
    RESET_NEWS_DETAIL
} from '../mutation-types.js';
import axios from 'axios';

const state = {
    newsList: null,
    newsDetail: null,
};

const getters = {
    newsList: state => state.newsList,
    newsDetail: state => state.newsDetail,
};

const actions = {
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
    [NEWS_DETAIL]: ({commit}, id) => {
        return new Promise((resolve, reject) => {
            axios.get(`https://fotokutok-618c4.firebaseio.com/news/news-detail/${id}.json`)
                .then((response) =>{
                    commit(NEWS_DETAIL, response.data);
                    resolve();
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
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
