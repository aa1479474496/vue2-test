<template>
    <div>
        <h1 class="text-center">这是todoList页面</h1>
       <p v-if="islogin">如果能看到说明是登录状态</p>
       <p v-else>如果能看到说明是退出状态</p>
    </div>
</template>

<script>
    import {
        mapState,
        mapGetters,
        mapActions
    } from 'vuex'

    export default {
        data() {
            return {

            }
        },
        computed: {
            ...mapState({
                islogin: state => state.login.isLogin
            })
        }
    }
</script>