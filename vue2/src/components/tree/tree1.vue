<template>
    <ul id="demo">
        <item class="item" :model="treeData"> </item>
    </ul>
</template>

<style scoped>
    .item {
    cursor: pointer;
    }
    .bold {
    font-weight: bold;
    }
    ul {
    padding-left: 1em;
    line-height: 1.5em;
    list-style-type: dot;
    }
</style>

<script>
    var data = {
        name: 'My Tree',
        children: [
            { name: 'hello' },
            { name: 'wat' },
            {
                name: 'child folder',
                children: [
                    {
                        name: 'child folder',
                        children: [
                            { name: 'hello' },
                            { name: 'wat' }
                        ]
                    },
                    { 
                        name: 'hello' 
                    },
                    { 
                        name: 'wat' 
                    },
                    {
                        name: 'child folder',
                        children: [
                            { name: 'hello' },
                            { name: 'wat' }
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
            'item': require('./../common/treeChildren1.vue')
        },
    }
</script>