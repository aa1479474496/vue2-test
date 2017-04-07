<template>
    <div class="mask">
        <div class="center" id="addwatchClass">
            <h3 style="height:40px;line-height:40px;background: #ffa900;color:#fff">标题标题标题
                <span class="pull-right" style="font-size:30px;color:yellow;cursor: pointer;margin-right: 20px;" @click="close">X</span>
            </h3>
            <div class="zmaxH300">
                <div class="row">
                    <div class="col-xs-6">
                        <input type="text"
                               data-toggle="tooltip"
                               data-placement="top"
                               data-original-title="如021-60488068">
                    </div>
                    <div class="col-xs-6">
                        <input type="text"
                               data-toggle="tooltip"
                               data-placement="top"
                               data-original-title="如021-60488068">
                    </div>
                    <div class="col-xs-6">
                        <input type="text"
                               data-toggle="tooltip"
                               data-placement="top"
                               data-original-title="如021-60488068">
                    </div>
                    <div class="col-xs-6">
                        <input type="text"
                               data-toggle="tooltip"
                               data-placement="top"
                               data-original-title="如021-60488068">
                    </div>
                    <div class="col-xs-6">
                        <input type="text"
                               data-toggle="tooltip"
                               data-placement="top"
                               data-original-title="如021-60488068">
                    </div>
                    <div class="col-xs-6">
                        <input type="text"
                               data-toggle="tooltip"
                               data-placement="top"
                               data-original-title="如021-60488068">
                    </div>
                    <div class="col-xs-6">
                        <input type="text"
                               data-toggle="tooltip"
                               data-placement="top"
                               data-original-title="如021-60488068">
                    </div>
                    <div class="col-xs-6">
                        <input type="text"
                               data-toggle="tooltip"
                               data-placement="top"
                               data-original-title="如021-60488068">
                    </div>
                    <div class="col-xs-6">
                        <input type="text"
                               data-toggle="tooltip"
                               data-placement="top"
                               data-original-title="如021-60488068">
                    </div>
                    <div class="col-xs-6">
                        <input type="text"
                               data-toggle="tooltip"
                               data-placement="top"
                               data-original-title="如021-60488068">
                    </div>
                    <div class="col-xs-6">
                        <input type="text"
                               data-toggle="tooltip"
                               data-placement="top"
                               data-original-title="如021-60488068">
                    </div>
                    <div class="col-xs-6">
                        <input type="text"
                               data-toggle="tooltip"
                               data-placement="top"
                               data-original-title="如021-60488068">
                    </div>
                    <div class="col-xs-6">
                        <input type="text"
                               data-toggle="tooltip"
                               data-placement="top"
                               data-original-title="如021-60488068">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.mask {
    width: 100%;
    background: rgba(0, 0, 0, .2);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 98;
}

.center {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    height: 520px;
    width: 1016px;
    border: 1px solid red;
    background: #fff;
}

.zmaxH300 {
    padding-top: 50px;
    max-height: 300px;
    overflow-x: hidden;
    overflow-y: auto;
}

.col-xs-6 {
    margin-bottom: 20px;
}
</style>

<script>
export default {
    name: 'mo',
    mounted() {
        $("[data-toggle='tooltip']").tooltip();
    //     setInterval(() => {
    //     let top = $('#addwatchClass').offset().top;
    //     console.log(top);
    //   },500)

    
    },
    methods: {
        close() {
            this.$emit('close')
        }
    }
}
</script>