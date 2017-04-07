<template>
    <div>
        <div class="row text-center">
            <div class="col-xs-12">11111</div>
            <div class="col-xs-12">
                <button @click="mFlag=true" style="cursor:pointer;">点击出现弹出框</button>
            </div>
        </div>
        <modal v-if="mFlag==true" @close="colseModal"></modal>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                mFlag: false
            }
        },
         components: {
        	
            modal: require('./modal.vue'),

        },
        mounted() {
            var o = {
                name: 'abc',
                age: 1,
                id: '002',
                arr: {
                    aaa: 222
                }
            }
            Object.keys(o).forEach(function(name) {
                console.log(name);
            })
        },
        methods: {
            colseModal() {
                this.mFlag = false;
            }
        }
    }
</script>