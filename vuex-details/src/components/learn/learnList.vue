<template>
    <div>
        <h1 class="text-center">欢迎来到learn vue2页面</h1>
        <ul class="learnListNav">
            <router-link :to="{path:'/learn/vfor'}"  tag="li" :class="[this.$route.path=='/v-for' ? 'colActive':'']">去学习v-for</router-link>
            <router-link :to="{path:'/learn/vfor1'}" tag="li">去学习v-for1</router-link>
            <router-link :to="{path:'/learn/vfor2'}" tag="li">去学习v-for2</router-link>
            <router-link :to="{path:'/learn/vfor3'}" tag="li">去学习v-for3</router-link>
        </ul>
        
        <div class="learnLisView">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                path: this.$route.path,
                num: 1
            }
        },
        mounted(){
            var self = this;
             console.log(this.path);
            //  setInterval(() => this.num++,1000);
             
        },
        watch: {
            'num' : function(val) {
                    console.log(val);
            }
        }
    }
</script>