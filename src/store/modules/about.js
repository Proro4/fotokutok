import {
    ABOUT,

} from '../mutation-types.js';
import {storage} from '@/main';

import axios from 'axios';

const state = {
    aboutMe:null,
};

const getters = {
    aboutMe: state => state.aboutMe,
};

const actions = {
    [ABOUT]: ({commit}) => {
        return new Promise((resolve, reject) => {
            axios
                .get('https://fotokutok-618c4.firebaseio.com/aboutMe.json')
                .then((response) => {
                    commit(ABOUT, response.data);
                    resolve();
                })
                .catch((response) => {
                    reject(response);
                })
        })
    },
};

const mutations = {
    [ABOUT](state, status) {
        state.aboutMe = status;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
