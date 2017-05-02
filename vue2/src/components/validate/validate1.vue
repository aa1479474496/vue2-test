<template>
    <div>
        <h1 class="text-center">validate1</h1>
        <div class="container">
            <div class="row">
                <div class="col-xs-4">
                    <label for="">用户名：</label>
                    <input v-model.trim="imgCode" type="text" name="img" value="">
                    <p v-if="test(imgCode)">error</p>
                </div>
                 <div class="col-xs-4">
                    <label for="">密码：</label>
                    <input type="text" name="mob" v-va:mobile="mobile" v-model.trim="mobile" class="va">
                </div>
                <div class="col-xs-12"><button v-vaCheck>点击提交</button></div> 
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
                imgCode: '',
                mobile: ''
            }
        },
        methods:{
            test(reg) {
                console.log(reg)
                if(reg) {
                    return true
                }
                return false
                // return reg;
            },
           
        }
    }

</script>