import Vue from 'vue'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import store from './vuex/store'
import App from './App'
import $ from 'jquery'
Vue.use(VueRouter);

// const routes = [{
//         path: '',
//         name: 'home',
//         component: function(resolve) {
//             require(['./components/home/home'], resolve)
//         }
//     },
//     {
//         path: '/user/:id',
//         name: '/user/:id',
//         component: function(resolve) {
//             require(['./components/user/Commentuser'], resolve)
//         }
//     }
// ];
const routes = [{
        path: '',
        name: 'home',
        component: function(resolve) {
            require(['./components/home/home.vue'], resolve)
        }
    },
    {
        path: '/vuexTest1',
        name: 'vuesTest1',
        component: function(resolve) {
            require(['./components/vuexTest/vuexTest1.vue'], resolve)
        }
    },
    {
        path: '/vuexTest1mapState',
        name: 'vuexTest1mapState',
        component: function(resolve) {
            require(['./components/vuexTest/vuexTest1mapState.vue'], resolve)
        }
    },
    {
        path: '/mapStateGetters',
        name: 'mapStateGetters',
        component: function(resolve) {
            require(['./components/vuexTest/mapStateGetters.vue'], resolve)
        }
    },
    {
        path: '/Mutations',
        name: 'Mutations',
        component: function(resolve) {
            require(['./components/vuexTest/Mutations.vue'], resolve)
        }
    },
    {
        path: '/actions',
        name: 'actions',
        component: function(resolve) {
            require(['./components/vuexTest/actions.vue'], resolve)
        }
    },
    {
        path: '/test',
        name: 'test',
        component: function(resolve) {
            require(['./components/test/test.vue'], resolve)
        },
        children: [{
                path: '',
                name: 'info',
                component: function(resolve) {
                    require(['./components/test/test1.vue'], resolve)
                }
            },
            {
                path: '/test1',
                name: 'test1',
                component: function(resolve) {
                    require(['./components/test/test1.vue'], resolve)
                }
            }, {
                path: '/test2/:storeId',
                name: 'test2',
                component: function(resolve) {
                    require(['./components/test/test2.vue'], resolve)
                }
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
    router: router,
    render: h => h(App)
}).$mount('#app');