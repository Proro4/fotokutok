import {
    GALLERY_LIST

} from '../mutation-types.js';
import axios from 'axios';

const state = {
    galleryList: null
};

const getters = {
    galleryList: state => state.galleryList,
};

const actions = {
    [GALLERY_LIST]: ({commit}) => {
        return new Promise((resolve, reject) => {
            axios
                .get('')
                .then((response) => {
                    commit(GALLERY_LIST, response.data);
                    resolve();
                })
                .catch((response) => {
                    reject(response);
                })
        })
    },
};

const mutations = {
    [GALLERY_LIST](state, status) {
        state.galleryList = status;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
