<template>
    <div>
        <h1 class="text-center">validate4</h1>
        <div class="container">
            <div class="row">
                <div class="col-xs-4">
                    <label for="">验证码</label>
                    <input v-va:imgCode="imgCode" v-model.trim="imgCode" type="text" name="img" value="">
                    <span v-if="errormsg.imgCode == 'imgCode'">验证码错误</span>
                </div>
                <div class="col-xs-4">
                    <label for="">手机号</label>
                    <input type="text" name="mob" v-va:mobile="mobile" v-model.trim="mobile">
                    <span v-if="errormsg.mobile == 'mobile'">手机号错误</span>
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
export default {
    data() {
        return {
            imgCode: '123',
            mobile: '',
            errormsg: {}


        }
    },
    methods: {


    }
}

</script>