<template>
  <div id="app">
        <!--  <p>
            <router-link to="/user/foo">/user/foo</router-link>
            <router-link to="/user/bar">/user/bar</router-link>
          </p> -->
        <router-view></router-view>
    </div>
</template>

<style scope>
    /*.router-link-active {
        color: red;
    }*/
</style>

<script>
    import store from './vuex/store'
    import Hello from './components/Hello'
    export default {
        store,
        mounted() {
            console.log('app');
        }
    }
</script>