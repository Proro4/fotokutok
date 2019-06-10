import {
    AUTH
} from '../mutation-types.js';
import axios from 'axios';

const state = {
    auth: null
};

const getters = {
    auth: state => state.auth,
};

const actions = {
    [AUTH]: ({commit}) => {
        return new Promise((resolve, reject) => {
            axios
                .get('')
                .then((response) => {
                    commit(AUTH, response.data);
                    resolve();
                })
                .catch((response) => {
                    reject(response);
                })
        })
    },
};

const mutations = {
    [AUTH](state, status) {
        state.auth = status;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
