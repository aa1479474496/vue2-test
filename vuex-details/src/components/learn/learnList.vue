<template>
    <div>
        <h1 class="text-center">欢迎来到learn vue2页面</h1>
        <!-- <div style="width:300px;height:1200px;border:2px solid green;">测试滚动条记录位置</div> -->
        <ul class="learnListNav">

        <!-- name搭配着params使用   path搭配着query使用，会在url中带出查询参数 -->
            <router-link :to="{path:'/learn/vfor'}"  tag="li" :class="[this.$route.path=='/learn' || this.$route.path== '/learn/vfor' ? 'colActive':'']">去学习v-for</router-link>
            <router-link :to="{path:'/learn/vfor1',query:{abc:1}}" tag="li" :class="[this.$route.path=='/learn/vfor1' ? 'colActive':'']">去学习v-for1</router-link>
            <router-link :to="{name:'vfor2',params:{def:222}}" tag="li" :class="[this.$route.path=='/learn/vfor2' ? 'colActive':'']">去学习v-for2</router-link>
            <router-link :to="{path:'/learn/vfor3'}" tag="li">去学习v-for3</router-link>
            <!--<router-link :to="{name:'routetest',params:{aaa:333}}" tag="li">route test</router-link>-->
        </ul>
        
        <div style="cursor: pointer;" @click="navigatTo">点击去route test</div>
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
        methods: {
            navigatTo() {
                this.$router.push({name:'routetest',params:{aaa:333}})
            }
        },
        watch: {
            'num' : function(val) {
                    console.log(val);
            }
        }
    }
</script>