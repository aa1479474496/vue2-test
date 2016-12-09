<template>
    <div>
        <!--<div style="height:800px;border:1px solid skyblue;"></div>-->
        <div>home</div>
       
        <!--<router-link to="/user/foo">/user/foo</router-link>
        <router-link to="/user/bar">/user/bar</router-link>-->
        <router-link to="/test">test(主要功能嵌套路由，两种路由的写法，params传参，点击当前切换样式)</router-link>
        <router-link :to="{name:'vuesTest1'}">vuexTest1(最基础的vuex用法)</router-link>
        <router-link :to="{name:'vuexTest1mapState'}">vuexTest1mapState(引用mapState，与vuexTest1对比下区别)</router-link>
        <router-link :to="{name:'mapStateGetters'}">mapStateGetters（引用mapState，mapGetters,可以看下简化的写法）</router-link>
        <router-link :to="{name:'Mutations'}">Mutations（引用mapState，mapGetters,Mutations）</router-link>
        <router-link :to="{name:'actions'}">actions（为了处理异步操作Actions）</router-link>
        <!--<router-link :to="{name:'test2',params:{storeId:JSON.stringify({a:1,b:2,c:3})}}">去test2页面</router-link>-->

        <!--<router-link to="/test1">/test/test1</router-link>-->
        <!--<router-link to="/test2">/test/test2</router-link>-->
       <!--<router-view> </router-view>-->
           
      
   </div>
</template>

<style>
    a {
        display: block;
        margin: 10px;
    }
</style>

<script>
    export default {
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>