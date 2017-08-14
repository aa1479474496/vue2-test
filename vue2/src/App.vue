<template>
  <div id="app">
        <router-view></router-view>
    </div>
</template>

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