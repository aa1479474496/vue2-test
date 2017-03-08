import Vue from 'vue'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import store from './vuex/store'
import VueResource from 'vue-resource'
import App from './App'
import $ from 'jquery'
import 'bootstrap'
import './assets/css/bootstrap.min.css'
import './assets/css/bootstrap-theme.min.css'
// import './components/common/directives.js'
require('./components/common/directives.js')
Vue.use(VueRouter);
Vue.use(VueResource)

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
                path: 'test1',
                name: 'test1',
                component: function(resolve) {
                    require(['./components/test/test1.vue'], resolve)
                }
            }, {
                path: 'test2/:storeId',
                name: 'test2',
                component: function(resolve) {
                    require(['./components/test/test2.vue'], resolve)
                }
            }
        ]
    },
    {
        path: '/regionAdd',
        name: 'regionAdd',
        component: function(resolve) {
            require(['./components/region/regionAdd.vue'], resolve)
        }
    },
    {
        path: '/calendar',
        name: 'calendar',
        component: function(resolve) {
            require(['./components/calendar/calendar.vue'], resolve)
        }
    },
    {
        path: '/tree1',
        name: 'tree1',
        component: function(resolve) {
            require(['./components/tree/tree1.vue'], resolve)
        }
    },
    {
        path: '/tree2',
        name: 'tree2',
        component: function(resolve) {
            require(['./components/tree/tree2.vue'], resolve)
        }
    },
    {
        path: '/mock1',
        name: 'mock1',
        component: function(resolve) {
            require(['./components/mock/mock1.vue'], resolve)
        }
    },
    {
        path: '/mixin1',
        name: 'mixin1',
        component: function(resolve) {
            require(['./components/mixin/mixin1.vue'], resolve)
        }
    },
    {
        path: '/directives',
        name: 'directives',
        component(resolve) {
            require(['./components/directives/directives.vue'], resolve)
        },
        children: [
            {
                path:'',
                component(resolve) {
                    require(['./components/directives/directives1.vue'], resolve)
                }
            },
            {
                path:'directives1',
                name:'directives1',
                component(resolve) {
                    require(['./components/directives/directives1.vue'], resolve)
                }
            },
             {
                path:'directives2',
                name:'directives2',
                component(resolve) {
                    require(['./components/directives/directives2.vue'], resolve)
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