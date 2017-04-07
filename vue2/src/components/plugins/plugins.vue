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
        <div><button id="btn" @click="sport">点击执行css动画</button></div>
        <div id="animation" style="width:20px;height:20px;background: green;"></div>
    
    </div>
</template>
<style scoped>
#animation {
    
    -webkit-transition: transform 2s linear;
    transition: transform 2s linear;
}
.sport {
    -webkit-transform: translateX(300px);
    transform: translateX(300px);
}
</style>
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
            Toast({ message: '输入错误1', position: 'bottom' })
            // Toast({ message: '输入错误2' })
        },
        test() {
            console.log(1);
        },
        sport() {
            $('#animation').addClass('sport');
            $('#animation').get(0).addEventListener('transitionend', remove);
            function remove() {
                console.log(111);
            }
            // $('#animation').on('transitionend', function() {
            //     alert('sport end')
            // });
        }

    }
}
</script>