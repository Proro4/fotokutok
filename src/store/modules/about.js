import {
    ABOUT,
    ABOUT_CHANGE

} from '../mutation-types.js';
import {storage} from '@/main';

import axios from 'axios';

const state = {
    aboutMe: null,
    aboutChange: null,
};

const getters = {
    aboutMe: state => state.aboutMe,
    aboutChange: state => state.aboutChange,
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
    [ABOUT_CHANGE]: async ({commit}, playload) => {
        try{
            let result = await axios.put('https://fotokutok-618c4.firebaseio.com/aboutMe.json', playload)
            commit(ABOUT_CHANGE, result.data)
        }catch (e) {
            throw e;
        }
    }
};

const mutations = {
    [ABOUT_CHANGE](state, status){
        state.aboutChange = status;
    },
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
