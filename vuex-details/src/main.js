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
    },
    {
        path: '/learn',
        name: 'learn',
        component(resolve) { require(['./components/learn/learnList.vue'], resolve) },
        children: [
            //  {
            //     path: '',
            //     component(resolve) { require(['./components/learn/vfor.vue'], resolve) }
            // },
             {
                path: 'vfor',
                name: 'vfor',
                component(resolve) { require(['./components/learn/vfor.vue'], resolve) }
            },
             {
                path: 'vfor1',
                name: 'vfor1',
                component(resolve) { require(['./components/learn/vfor1.vue'], resolve) }
            },
             {
                path: 'vfor2',
                name: 'vfor2',
                component(resolve) { require(['./components/learn/vfor2.vue'], resolve) }
            },
             {
                path: 'vfor3',
                name: 'vfor3',
                component(resolve) { require(['./components/learn/vfor3.vue'], resolve) }
            }
        ]
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