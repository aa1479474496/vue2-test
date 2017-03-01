<template>
    <div>
        mock测试
        <h3>{{mydata.list}}</h3>
        <ul>
            <li v-for="item in mydata.list">
                <template v-for="(value,key) in item">{{value}}---{{key}}</template>
            </li>
        </ul>
    </div>
</template>

<script>
    var Mock = require('mockjs');
    // [{},{},{}]
    var data = Mock.mock({
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        'list|1-10': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': 1
        }]
    });
    export default {
        data() {
            return {
                mydata:null
            }
        },
        mounted() {
            this.$nextTick(function() {
                // this.mydata = JSON.parse(data, null, 4);
                this.mydata = JSON.parse(JSON.stringify(data, null, 4));
                // this.mydata = JSON.parse(this.mydata);
                console.log(typeof this.mydata);
            })
            
        }
    }
</script>

