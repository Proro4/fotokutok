import {
    OPTIONS,
    OPTIONS_SAVE,
    POPUP_ALBUM
} from '../mutation-types.js';

import axios from 'axios';

const state = {
    options: null,
    popupAlbum: false,
    optionsImages: [],
};
const getters = {
    options: state => state.options,
    popupAlbum: state => state.popupAlbum,
    optionsImages: state => state.optionsImages,
};
const actions = {
    [OPTIONS]: async ({commit}) => {
        try {
            let result = await axios.get('https://fotokutok-618c4.firebaseio.com/options.json');
            commit(OPTIONS, result.data);
            return result.data
        }catch (e) {
            throw e
        }
    },
    [OPTIONS_SAVE]: async ({commit}, playload) => {
        try {
            let result = await axios.put('https://fotokutok-618c4.firebaseio.com/options.json', playload);
            console.log(result);
            commit(OPTIONS_SAVE, result.data);
        }catch (e) {
            throw e
        }
    }
};
const mutations = {
    [OPTIONS](state, status){
        state.options = status;
        let item;
        for(item in status.imgLinks){
            state.optionsImages.push(status.imgLinks[item]);
        }
    },
    [OPTIONS_SAVE](state, status){
        state.options = status;
    },
    [POPUP_ALBUM](state, status){
        state.popupAlbum = status;
    }
};
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
