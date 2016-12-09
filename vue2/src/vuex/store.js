import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
    count: 55,
    count2: 111,
    todos: [
        { id: 1, text: '...', done: true },
        { id: 2, text: '...', done: false },
        { id: 3, text: '...', done: false },
        { id: 4, text: '四条数据', done: true }
    ]
}
const mutations = {
    increment(state) {
        state.count++
    },
    decrement(state) {
        state.count--
    },
    count2Test(state, n) {
        state.count2 += n
    }
}
const actions = {
    incrementTest: ({ commit }) => commit('increment'),
    decrementTest: ({ commit }) => commit('decrement'),
    paramsTest: ({ commit }, n) => commit('count2Test', n)
}

const getters = {
    doneTodos: state => {
        return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
        return getters.doneTodos.length
    }
}



export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})