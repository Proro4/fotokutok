import {
    OPTIONS,
    OPTIONS_SAVE,
    POPUP_ALBUM,
    POPUP_BCK,
    OPTIONS_CHANGE
} from '../mutation-types.js';

import axios from 'axios';
import VueGallery from 'vue-gallery';

const state = {
    options: null,
    popupAlbum: false,
    popupBck: false,
    optionsImages: [],
    optionsBck: [],
    optionChange: null,
};
const getters = {
    options: state => state.options,
    optionsChangeBck: state => state.options.bck,
    popupAlbum: state => state.popupAlbum,
    optionsImages: state => state.optionsImages,
    optionsBck: state => state.optionsBck,
    popupBck: state => state.popupBck,
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
    },
    [OPTIONS_CHANGE]: async  ({commit}, playload) => {
        try {
            let result = await axios.put('https://fotokutok-618c4.firebaseio.com/options/bck.json', playload);
            commit(OPTIONS_CHANGE, result.data);
        }catch (e) {
            throw e
        }
    }
};
const mutations = {
    [OPTIONS_CHANGE](state, status){
        state.optionChange = status;
    },
    [POPUP_BCK](state, status){
        state.popupBck = status;
    },
    [OPTIONS](state, status){
        state.options = status;
        state.optionsImages = [];
        let item;
        for(item in status.imgLinks){
            state.optionsImages.push(status.imgLinks[item]);
        }
        state.optionsBck.push(status.bck.bckUrl);
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
