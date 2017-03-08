<template>
    <div class="container">
        <h3 class="text-center">自定义批令</h1>
        <div class="row text-center">
            <div class="col-xs-6">
                <router-link :to="{path:'/directives/directives1'}">去directives1页面</router-link>
            </div>
            <div class="col-xs-6">
                <router-link :to="{path:'/directives/directives2'}">去directives2页面</router-link>
            </div>
            <div class="col-xs-12">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        mounted() {
            
        },
        watch: {
            '$route' (to, from) {
                const toDepth = to.path
                const fromDepth = from.path
                // console.log(toDepth,toDepth)
                // this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
            }
        }
    }
</script>