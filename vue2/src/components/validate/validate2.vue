<template>
    <div>
        <h1 class="text-center">validate2</h1>
        <div class="container">
            <div class="row">
                <div class="col-xs-4">
                    <label for="">验证码1</label>
                    <input v-model.trim="imgCode" type="text" name="img" value="">
                    
                    <p v-show="check('imgCode', imgCode) === false || errorFiled.imgCode == 'imgCode'">验证码不正确</p>
                    <p>{{errorFiled.imgCode}}</p>
                </div>
                <div class="col-xs-4">
                    <label for="">验证码2</label>
                    <input v-model.trim="imgCode2" type="text" name="img" value="">
                    <p v-show="check('imgCode-2', imgCode2) === false || errorFiled['imgCode-2'] == 'imgCode-2'">验证码2不正确</p>
                    <p>{{errorFiled['imgCode-2']}}</p>
                </div>
                 <div class="col-xs-4">
                    <label for="">手机号</label>
                    <input type="text" name="mobile" v-model.trim="mobile">
                    <p v-show="check('mobile', mobile) === false || errorFiled.mobile == 'mobile'">手机号不正确</p>
                    <p>{{errorFiled.mobile}}</p>
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
                imgCode: '',
                imgCode2: '',
                mobile: '',
                errorFiled: {}
            }
        },
        mixins: [myMixin],
        mounted() {
            
        },
        methods:{
            params() {
                var o = {
                    'imgCode' : this.imgCode ,
                    'mobile' : this.mobile,
                    'imgCode-2' : this.imgCode2
                }
                return o;
            },
            checkForm() {
                
                var flag = this.checkAll(this.params());
                console.log('flag:' + flag);
            }
           
        }
    }

</script>