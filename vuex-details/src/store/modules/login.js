import * as types from '../mutation-types'


const state = {
    isLogin: false
}

const mutations = {
    [types.CHECK_LOGIN](state, flag) {
        state.isLogin = flag
    }
}

const actions = {
    checkLogin: ({ commit }, flag) => commit(types.CHECK_LOGIN, flag)
}
export default {
    state,
    actions,
    mutations
}