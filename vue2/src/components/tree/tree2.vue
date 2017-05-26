<template>
<div class="box">
    <ul id="demo">
        <item class="item" :model="treeData"> </item>
    </ul>
</div>    
</template>

<style>
    ul,ol,li{
        list-style-type:none;
    }
    .box{
        width:500px;
        margin: 30px auto;
    }
    .item {
        cursor: pointer;
    }
    .bold {
        font-weight: bold;
    }
    ul {
        padding-left: 14px;
        line-height: 22px;
        /*list-style-type: dashed;*/
    }
    li,li>div{
        margin-bottom: 10px;
    }
    .grayback{
        background-color: #eee;
    }
    .arrow{
        width: 10px;
        height: 10px;
        display: inline-block;
    }
    .arrowLeft,.arrowSecLeft {
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
    }
    .arrowLeft{
        border-left: 8px solid #ccc;
    }
    .arrowSecLeft{
        border-left: 8px solid #ff8200;
    }
    .arrowSecBottom{
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 8px solid #ff8200;
    }
</style>

<script>
    var data = {
        name: '学校',
        children: [
            { name: '高中' },
            { name: '中学' },
            {
                name: '小学',
                children: [
                    {
                        name: '一年级',
                        children: [
                            { name: '一(一)班' },
                            { name: '一(二)班' }
                        ]
                    },
                    { 
                        name: '二年级' 
                    },
                    { 
                        name: '三年级' 
                    },
                    {
                        name: '四年级',
                        children: [
                            { name: '四(一)班' },
                            { name: '四(二)班' }
                        ]
                    }
                ]
            }
        ]
    }
    export default {
        data() {
            return {
                treeData: data
            }
        },
         components: {
            'item': require('./../common/treeChildren2.vue')
        },
        mounted() {
           
        }
    }
</script>