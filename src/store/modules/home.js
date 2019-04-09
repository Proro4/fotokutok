import {
    NEWS_LIST,
} from '../mutation-types.js';

const state = {
    newsList: [],
    skip: 0,
    limit: 3,
    isLoad: false,
    newsLength: 13,
    goToPositionScroll: false,
    positionScroll: 0,
    newsDetail:null,
    loading: false,
};

const getters = {
    loading: state => state.loading,
    isLoad: state => state.isLoad,
    newsLength: state => state.newsLength,
    skip: state => state.skip,
    newsList: state => state.newsList,
    goToPositionScroll: state => state.goToPositionScroll,
    positionScroll: state => state.positionScroll,
    newsDetail: state => state.newsDetail,
};

const actions = {
    [NEWS_LIST]: ({commit}) => {
        commit(NEWS_LIST_LOADING, true);
        return new Promise((resolve, reject) => {
            $http.get(`v1/news?limit=${state.limit}&skip=${state.skip}`)
                .then((response) => {
                    commit(NEWS_LIST, response.data.data);
                    // commit(NEWS_LENGTH, response.data.meta.count);
                    commit(CHANGE_NEWS_SKIP);
                    resolve();
                })
                .catch((response) => {
                    reject(response);
                })
                .finally(() => commit(NEWS_LIST_LOADING, false))
        })
    },
    [NEWS_DETAIL]: ({commit}, id) => {
        return new Promise((resolve, reject) => {
            $http.get(`v1/news/${id}`)
                .then((response) =>{
                    commit(NEWS_DETAIL, response.data.data);
                    resolve();
                })
                .catch((response) =>{
                    reject(response);
                })

        })
    }
};

const mutations = {
    [NEWS_LIST](state, newsList) {
        state.newsList.push(...newsList);
        let uniqList = _.uniq(state.newsList);
        state.newsList = uniqList;
    },
    [NEWS_CHANGE_POSITION_SCROLL](state, offsetTop) {
        state.positionScroll = offsetTop;
    },
    [NEWS_LIST_LOADING](state, status) {
        state.loading = status;
    },
    [GO_NEWS_CHANGE_POSITION_SCROLL](state, status) {
        state.goToPositionScroll = status;
    },
    [NEWS_DETAIL](state, newsDetail){
        state.newsDetail = newsDetail;
    },
    [RESET_NEWS_DETAIL](state){
        state.newsDetail = null;
    },
    [NEWS_LENGTH](state, length){
        state.newsLength = length;
    },
    [CHANGE_NEWS_SKIP](state){
        state.skip = state.skip+3;
    },
    [CHANGE_IS_LOAD_NEWS](state, status) {
        state.isLoad = status
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
