<template>
    <div>
        <h1 class="text-center">这是登录页面</h1>
        <div class="content">
            <div>state里登录状态的值为：{{isLogin}}</div>
            <div v-if="isLogin">123456</div>
            <div v-else>789</div>
            <div>
                <label for="">用户名</label>
                <input type="text" v-model="user.userName" placeholder="请输入用户名">
            </div>
            <div>
                <label for="">密&nbsp;&nbsp;&nbsp;&nbsp;码</label>
                <input type="text" v-model="user.password" placeholder="请输入密码">
            </div>
            <button @click="checkLogin">我要登录</button>
            <button @click="loginOut">退出登录</button>
        </div>
        <p id="abc">1233333</p>
    </div>
</template>

<script>
    import { mapState, mapGetters, mapActions } from 'vuex'
    export default {
        data(){
            return {
                user:{
                    userName:'',
                    password:''
                }
            }
        },
        computed:{
            ...mapState({
                 isLogin: state => state.login.isLogin,
            })
        },
        mounted() {
            console.log($('#abc'))
        },
        methods:{
           checkLogin(){
               if(this.user.userName.trim()&&this.user.password.trim()){
                   this.$store.dispatch('checkLogin',true)
                }
               else{
                   this.$store.dispatch('checkLogin',false)
               }
           },
           loginOut(){
               this.$store.dispatch('checkLogin',false)
               this.user.userName = this.user.password = '';
           }

        }
    }
</script>