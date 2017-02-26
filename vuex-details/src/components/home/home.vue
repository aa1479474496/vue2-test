<template>
    <div>
        <div class="text-center">home</div>
        <ul>
             <router-link :to="{name:'login-login'}" tag="li" class="indexNav">去登录界面</router-link>
             <router-link :to="{name:'todo-todoList'}" tag="li" class="indexNav">去做一个todoList</router-link>
             <router-link to="/learn" tag="li" class="indexNav">去vue2学习笔记页面</router-link>
        </ul>
       
        
           
      
   </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>