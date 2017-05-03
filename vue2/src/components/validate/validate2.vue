<template>
    <div>
        <h1 class="text-center">validate2</h1>
        <div class="container">
            <div class="row">
                <div class="col-xs-4">
                    <label for="">用户名2：</label>
                    <input v-model.trim="imgCode" type="text" name="img" value="">
                    <p v-if="check('imgCode', imgCode) === false">用户名2不正确</p>
                    <p v-if="check('imgCode', imgCode) === true">用户名2正确</p>
                    <p>{{check('imgCode', imgCode)}}</p>
                </div>
                 <div class="col-xs-4">
                    <label for="">密码2：</label>
                    <input type="text" name="mob" v-model.trim="mobile">
                    <p v-if="check('mobile', mobile) === false">密码2不正确</p>
                    <p v-if="check('mobile', mobile) === true">密码2正确</p>
                    <p>{{check('mobile', mobile)}}</p>
                </div>
                <div class="col-xs-12"><button @click="checkForm">点击提交</button></div> 
            </div>
        </div>
    </div>
</template>
<style scoped>
input:focus {
    outline: none;
}
.success {
    border: 1px solid green;
}
.warn {
    border: 1px solid red;
}
</style>
<script>
    import {myMixin} from '../common/mixin.js'
    export default {
        data() {
            return {
                imgCode: 0,
                mobile: ''
            }
        },
        mixins: [myMixin],
        methods:{
            params() {
                var o = {
                    'imgCode' : this.imgCode ,
                    'mobile' : this.mobile
                }
                return o;
            },
            checkForm() {
                this.check('mobile', this.mobile);
                var flag = this.checkAll(this.params());
                console.log('flag:' + flag);
            }
           
        }
    }

</script>