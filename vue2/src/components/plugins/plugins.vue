<template>
    <div>
        <h3 class="text-center">toast插件</h3>
        <div class="row">
            <div class="col-xs-4 col-xs-offset-4"
                 @click="showToast1">点击出现toast1插件</div>
        </div>
        <div class="row">
            <div class="col-xs-4 col-xs-offset-4"
                 @click="showToast">点击出现toast插件</div>
        </div>
    
    </div>
</template>

<script>
import Toast from '../common/toast.js'

export default {
    data() {
        return {

        }
    },
    mounted() {
        // console.log(this.$toastMsg);
    },
    methods: {
        showToast1() {
            // this.$toast1('bottom','abc')
            this.$toast1('输入错误');
            // this.$toast1.top('top');
        },
        showToast() {
            // console.log(2);
            Toast({ message: '输入错误输入错误输入错误输入错误输入错误' })
        }
    }
}
</script>