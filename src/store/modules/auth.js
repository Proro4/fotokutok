import {
    AUTH_TOKEN,
    NEWS_LIST

} from '../mutation-types.js';
import { storage } from '@/main';

import axios from 'axios';

const state = {
    newsList: null,
};

const getters = {
    newsList: state => state.newsList,
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
};

const mutations = {
    [NEWS_LIST](state, status) {
        state.newsList = status;
        let storageRef = storage.ref();
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
