import Vue from 'vue'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import store from './store'
import App from './App'
import $ from 'jquery'
require('./assets/css/main.scss')
Vue.use(VueRouter);

const routes = [{
        path: '',
        name: 'home',
        component: function(resolve) {
            require(['./components/home/home.vue'], resolve)
        }
    },
    {
        path: '/login',
        name: 'login-login',
        component(resolve) { require(['./components/login/login.vue'], resolve) }
    },
    {
        path: '/todoList',
        name: 'todo-todoList',
        component(resolve) { require(['./components/todos/todoList.vue'], resolve) }
    }
];






const router = new VueRouter({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        if (savedPosition) {

            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }

    },
    routes,
});
sync(store, router)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');