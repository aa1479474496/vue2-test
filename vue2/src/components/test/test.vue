<template>
    <div>
       
        <p>test</p>
        <router-link :to="{path:'/test1'}">去test1页面</router-link>
        <router-link :to="{name:'test2',params:{storeId:JSON.stringify({a:1,b:2,c:3})}}">去test2页面</router-link>
        <router-view></router-view>
        <!--<info></info>-->
        <ul>
            <li v-for="(item,index) in list"
                v-bind:class="[liIndex == index ? 'active' : '']"
                :key="item.id"
                @click="changeColor(index)">
                {{item}}--{{index}}
            </li>
        </ul>
        <div id="abc">123</div>
        <div>{{testHan()}}</div>
        <div>{{test2}}</div>
        <button type="button" @click="testIndex++">testIndex加法运算</button>
    </div>
</template>
<style>
    li {
        cursor: pointer;
        margin: 10px
    }
    
    .active {
        color: skyblue;
    }
</style>
<script>
    // import $ from 'jquery'
    import Info from './info'
    export default {
        components: {
            Info
        },
        mounted: function() {
            // var [a, b, ...c] = [1, 2, 3, 4, 5, 6];
            var c = {
                a: 1,
                b: 2
            }
            var {
                a,
                b
            } = c;
            console.log(a, b);

        },
        computed: {
            test2() {
                var self = this;
                return self.testIndex
            }
        },
        methods: {
            // changeColor: function(index) {
            //     var self = this;
            //     self.liIndex = index;
            // },
            changeColor(index) {
                var self = this;
                self.liIndex = index;
            },
            testHan: function() {
                return 456;
            }
        },
        data() {
            return {
                list: [
                    '列表1',
                    '列表2',
                    '列表3',
                    '列表4',
                    '列表5'
                ],
                liIndex: 0,
                testIndex: 1
            }
        }


    }
</script>