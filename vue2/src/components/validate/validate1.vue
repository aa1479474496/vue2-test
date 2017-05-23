<template>
    <div>
        <h1 class="text-center">validate1</h1>
        <div class="container">
            <div class="row">
                <!--<div class="col-xs-4">
                                <label for="">验证码</label>
                                <input v-va:imgCode="imgCode" v-model.trim="imgCode" type="text" name="img" value="">
                               <span v-if="errormsg == 'imgCode'">验证码错误</span>
                            </div>
                             <div class="col-xs-4">
                                <label for="">手机号</label>
                                <input type="text" name="mob" v-va:mobile="mobile" v-model.trim="mobile">
                                <span v-if="errormsg == 'mobile'">手机号错误</span>
                            </div>-->
                <div class="col-xs-4">
                    <label for="">验证码</label>
                    <input v-model.trim="form.imgCode" type="text" name="img" value="">
                    <span v-if="errorField == 'imgCode'">{{errorMessage}}</span>
                </div>
                <div class="col-xs-4">
                    <label for="">手机号</label>
                    <input type="text" name="mob" v-model.trim="form.mobile">
                    <span v-if="errorField == 'mobile'">{{errorMessage}}</span>
                </div>
                <div class="col-xs-12">
                    <button @click="submitForm">点击提交</button>
                </div>
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
import Validator from '../common/va'
export default {
    data() {
        return {
            imgCode: '123',
            mobile: '',
            errormsg: '',
            errorField: null,
            errorMessage: null,
            form: {
                imgCode: '',
                mobile: ''

            },
            rules: {
                imgCode: 'required,imgCode',
                mobile: 'required,phone'
            },
            messages: {
                mobile: { required: '请输入手机号', phone: '请输入正确的手机号' },
                imgCode: { required: '请输入验证码', password: '四位数' }
            }
        }
    },
    methods: {
        submitForm() {
            let validate = Validator.make(this.form, this.rules, this.messages);
            if (validate != null) {
                this.errorField = validate.field
                this.errorMessage = validate.error
                return false
            }
        }

    }
}

</script>